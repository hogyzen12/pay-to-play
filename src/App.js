import { Suspense, useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Box, Typography, Backdrop, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { confirmAlert } from 'react-confirm-alert';
import { useTimer } from 'react-timer-hook';
import * as splToken from '@solana/spl-token';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
  RafflePage,
  AlphaPage,
  PremiaPage,
  PremiumPage,
  DiscountPage,
  CrosswordPage,
  MembershipPage,
  NotFoundPage,
  TestPage,
  MainPage,
  routes,
} from './routes';
import {
  Loader,
  Notification,
  ModalSubmit,
  ModalSuccess,
} from 'common/components';
import { localStorageGet, localStorageSet } from 'common/utils/localStorage';
import { transferCustomToken } from 'common/utils/transferToken';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { initialAlertState } from 'common/static/constants';
import { initialResults } from 'common/static/results';
import { PrivateRoute } from 'common/utils/PrivateRoute';
import { fillAnswers } from 'common/utils/fillAnswers';
import {
  NETWORK,
  diamondsRequiredToPlay,
  expiryTimestamp,
  gameWalletPublicKey,
  shadowMint,
  shadowRequiredToPlay,
  timeAmount,
  tokenMint,
  utilMemo,
} from 'common/static/constants';
import 'common/utils/bufferFill';
import AppLayout from 'common/layout/AppLayout';

let lamportsRequiredToPlay = 0.1 * LAMPORTS_PER_SOL;
expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timeAmount);

const App = () => {
  const [alertState, setAlertState] = useState(initialAlertState);
  const [transactionSignature, setTransactionSignature] = useState('');
  const [transferTokenStatus, setTransferTokenStatus] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [gameReseted, setGameReseted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timeDuration, setTimeDuration] = useState('00:00');
  const [providerPubKey, setProviderPub] = useState();
  const [provider, setProvider] = useState();

  const navigate = useNavigate();
  const location = useLocation();
  const gameRef = useRef();

  const { minutes, seconds, start, restart, pause, resume } = useTimer({
    expiryTimestamp,
    autoStart: true,
    onExpire: () => {
      switch (location.pathname) {
        case routes.crossword:
          return generateResults();
        case routes.raffle:
          return pause();
        default:
          navigate(routes.home);
      }
    },
  });

  /*
   * Connection to the Solana cluster
   */

  const connection = new Connection(NETWORK, 'confirmed');

  /*
   * React will call this useEffect everytime there is update in the provider variable.
   * Phantom provider provides 2 methods to listen on
   * 1. connect -> This method gets triggered when the wallet connection is successful
   * 2. disconnect -> This callback method gets triggered when the wallet gets disconnected from the application
   */

  useEffect(() => {
    if (openSubmitModal) pause();
  }, [openSubmitModal, pause]);

  useEffect(() => {
    if (provider && !provider.isConnected) provider.connect();
  }, [provider]);

  useEffect(() => {
    if (provider) {
      provider.on('connect', async () => {
        setAlertState({
          open: true,
          message: 'Wallet got connected',
          severity: 'success',
        });

        setProviderPub(provider.publicKey);
      });

      provider.on('disconnect', () => {
        setAlertState({
          open: true,
          message: 'Disconnected from wallet',
          severity: 'error',
        });
      });
    }
  }, [provider]);

  const handlePaySOL = async (selectedItem, currency) => {
    /*
     * Flow to play the game
     * 1. Check if the user is logged in
     * 2. Check the wallet has SOL in it
     * 3. If no SOL then ask him to fund the wallet first
     * 4. If required SOL present the, proceed with the transaction
     *
     */

    /*
     * Check if the user is logged in
     */

    if (!providerPubKey) {
      setAlertState({
        open: true,
        message: 'Please connect your wallet',
        severity: 'info',
      });

      return;
    }

    /*
     * Check if the user has SOL in his wallet
     */

    const accountBalance = await connection.getBalance(providerPubKey);
    const balanceInLamports = accountBalance ? parseInt(accountBalance) : 0;

    if (balanceInLamports < lamportsRequiredToPlay) {
      // setAlertState({
      //   open: true,
      //   message: 'Not enough balance, please fund your wallet',
      //   severity: 'info',
      // });

      // alert("Not enough balance, please fund your wallet")
      const fundNeededToPlay = lamportsRequiredToPlay - balanceInLamports;
      const optionsNoBalance = {
        childrenElement: () => <div />,
        customUI: ({ onClose }) => (
          <Backdrop open={true} onClick={onClose}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: { xs: '90%', md: '600px' },
                width: '100%',
                bgcolor: '#1D1D1D',
                padding: '16px 16px 32px',
                borderRadius: '8px',
              }}
            >
              <IconButton
                sx={{
                  display: 'block',
                  padding: '0',
                  margin: '0',
                  marginLeft: 'auto',
                  marginBottom: '20px',
                }}
                onClick={onClose}
              >
                <CloseIcon sx={{ color: '#A2A2A2' }} />
              </IconButton>
              <Typography
                sx={{
                  mb: '16px',
                  fontSize: '32px',
                  textAlign: 'center',
                }}
                variant="h3"
              >
                You do not have enough balance
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>
                Please fund your wallet with{' '}
                <b>{fundNeededToPlay / LAMPORTS_PER_SOL} SOL</b> tokens to play
                the game.
              </Typography>
            </Box>
          </Backdrop>
        ),
        closeOnEscape: true,
        closeOnClickOutside: true,
        willUnmount: () => {},
        afterClose: () => {},
        onClickOutside: () => {},
        onKeypressEscape: () => {},
        overlayClassName: 'overlay-custom-class-name',
      };

      confirmAlert(optionsNoBalance);
      return;
    }

    /*
     * If user has required SOL in the wallet, then deduct the amount
     */

    setLoading(true);
    lamportsRequiredToPlay = lamportsRequiredToPlay / LAMPORTS_PER_SOL;

    const result = await transferCustomToken(
      provider,
      connection,
      lamportsRequiredToPlay,
      providerPubKey,
      gameWalletPublicKey,
    );

    if (!result.status) {
      setTransferTokenStatus(result.status);

      setLoading(false);
      setAlertState({
        open: true,
        message: 'Error in sending the tokens, Please try again',
        severity: 'error',
      });

      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */

    setTransferTokenStatus(result.status);
    setLoading(false);

    navigate(selectedItem);
  };

  const handlePayDHMT = async (selectedItem, currency, hashMemo) => {
    const isSHDW = currency === 'SHDW';
    const isFree = currency === 'free';

    /*
     * Flow to play the game
     * 1. Check if the user is logged in
     * 2. Check the wallet has a DMND in it
     * 3. If no DMND then ask them to stake and get some
     * 4. If Diamond present then proceed
     * Check if the user is logged in
     */

    if (!providerPubKey) {
      setAlertState({
        open: true,
        message: 'Please connect your wallet',
        severity: 'info',
      });

      return;
    }

    if (isFree && selectedItem === routes.membership) {
      navigate(routes.membership);

      return;
    }

    if (isFree && selectedItem === routes.raffle) {
      navigate(routes.raffle);

      return;
    }

    /*
     * Check if the user has diamonds in their wallet
     * And use the value to check if they can afford the game
     */
    const diamondAddress = await splToken.getAssociatedTokenAddress(
      isSHDW ? shadowMint : tokenMint,
      providerPubKey,
    );

    /*
     * Output the ATA to console to check manually
     * TODO!!!! ADD ERROR HANDLE IF ATA NOT FOUND
     */
    // console.log(diamondAddress.toString());
    // console.log('found ATA');

    /*
     * Address found and we pull balance succesfully here
     * Print to console the amount to check
     */

    try {
      const diamondBalance = await connection.getTokenAccountBalance(
        diamondAddress,
      );

      console.log(diamondBalance);
      // console.log(diamondBalance.value.amount);
      // console.log('found balance');

      /*
       * Go here and check to see they can afford with diamonds
       */
      if (diamondBalance?.value?.amount < 1) {
        // alert("Not enough balance, please fund your wallet")
        const optionsNoBalance = {
          childrenElement: () => <div />,
          customUI: ({ onClose }) => (
            <Backdrop open={true} onClick={onClose}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: { xs: '90%', md: '600px' },
                  width: '100%',
                  bgcolor: '#1D1D1D',
                  padding: '16px 16px 32px',
                  borderRadius: '8px',
                }}
              >
                <IconButton
                  sx={{
                    display: 'block',
                    padding: '0',
                    margin: '0',
                    marginLeft: 'auto',
                    marginBottom: '20px',
                  }}
                  onClick={onClose}
                >
                  <CloseIcon sx={{ color: '#A2A2A2' }} />
                </IconButton>
                <Typography
                  sx={{
                    mb: '16px',
                    fontSize: '32px',
                    textAlign: 'center',
                  }}
                  variant="h3"
                >
                  You do need more SOL for gas fees
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  You need to have at least 1 DMND to play the game.
                </Typography>
              </Box>
            </Backdrop>
          ),
          closeOnEscape: true,
          closeOnClickOutside: true,
          willUnmount: () => {},
          afterClose: () => {},
          onClickOutside: () => {},
          onKeypressEscape: () => {},
          overlayClassName: 'overlay-custom-class-name',
        };

        confirmAlert(optionsNoBalance);
        return;
      }

      /*
       * Time to get them to send us their Diamond
       * For this we need to use the Associated token accounts
       * We know the accs will exist as the payer has diamonds to have gotten to this stage
       * we call our custom function here to do this
       */
      setLoading(true);

      const result = await transferDiamondToken(
        provider,
        connection,
        isSHDW ? shadowMint : tokenMint,
        providerPubKey,
        gameWalletPublicKey,
        diamondBalance.value.amount,
        isSHDW ? shadowRequiredToPlay : diamondsRequiredToPlay,
        hashMemo ? hashMemo : utilMemo,
      );

      if (!result.status) {
        setTransferTokenStatus(result.status);

        setLoading(false);
        setAlertState({
          open: true,
          message: 'Error in sending the tokens, Please try again',
          severity: 'error',
        });

        return;
      }

      /*
       * If the status is true, that means transaction got successful and we can proceed
       */

      // console.log('result.status', result.status);
      setTransferTokenStatus(result.status);
      setLoading(false);
      navigate(selectedItem);
    } catch (error) {
      console.log('SHDW error :>> ', error);

      setAlertState({
        open: true,
        message: 'Failed to get token account balance',
        severity: 'error',
      });
    }
  };

  const toggleSubmitModal = () => {
    setOpenSubmitModal(!openSubmitModal);

    if (openSubmitModal) resume();
  };

  const toggleSuccessModal = () => setOpenSuccessModal(!openSuccessModal);

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3599);
    setGameReseted(true);
    restart(time);
  };

  const getTimeDuration = () => {
    const min = (59 - minutes).toString();
    const sec = (60 - seconds).toString();
    const formattedMinutes = min.length === 1 ? `0${min}` : min;
    const formattedSeconds = sec.length === 1 ? `0${sec}` : sec;

    setTimeDuration(`${formattedMinutes}:${formattedSeconds}`);
  };

  const generateResults = () => {
    getTimeDuration();

    const data = localStorageGet('guesses');

    if (data && data.guesses) {
      fillAnswers('across', data.guesses);
      fillAnswers('down', data.guesses);
    }

    localStorageSet('results', initialResults);
    toggleSubmitModal();
  };

  const submitResults = async () => {
    toggleSubmitModal();

    const acrossAxisString =
      initialResults.across.reduce((acc, item) => {
        acc += item.answer ? `| ${item.answer} ` : `|  `;

        return acc;
      }, '') + '|';

    const downAxisString =
      initialResults.down.reduce((acc, item) => {
        acc += item.answer ? `| ${item.answer} ` : `|  `;

        return acc;
      }, '') + '|';

    const totalResultsString = (acrossAxisString + downAxisString).replace(
      '||',
      '|',
    );

    /*
     * Now we have answers ready we can write them to the chain
     * And have the user actually pay for this using the token
     */
    const diamondAddress = await splToken.getAssociatedTokenAddress(
      tokenMint,
      providerPubKey,
    );

    /*
     * Output the ATA to console to check manually
     * TODO!!!! ADD ERROR HANDLE IF ATA NOT FOUND
     */
    // console.log(diamondAddress.toString());
    // console.log('found ATA');

    /*
     * Address found and we pull balance succesfully here
     * Print to console the amount to check
     */
    const diamondBalance = await connection.getTokenAccountBalance(
      diamondAddress,
    );

    // console.log(diamondBalance.value.amount);
    // console.log('found balance');
    // console.log(totalResultsString);

    /*
     * Time to get them to send us their Diamond
     * For this we need to use the Associated token accounts
     * We know the accs will exist as the payer has diamonds to have gotten to this stage
     * we call our custom function here to do this
     */
    setLoading(true);

    const result = await transferDiamondToken(
      provider,
      connection,
      tokenMint,
      providerPubKey,
      gameWalletPublicKey,
      diamondBalance.value.amount,
      diamondsRequiredToPlay,
      totalResultsString,
    );

    if (!result.status) {
      setTransferTokenStatus(result.status);

      setLoading(false);
      setAlertState({
        open: true,
        message: 'Error in sending the tokens, Please try again',
        severity: 'error',
      });

      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */

    // console.log('result.status', result.status);

    if (result.signature) {
      setTransactionSignature(result.signature);
      toggleSuccessModal();
    }

    setLoading(false);
  };

  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route
            path={routes.home}
            element={
              <AppLayout
                seconds={seconds}
                minutes={minutes}
                resetTimer={resetTimer}
                handleClickDHMT={handlePayDHMT}
                providerPubKey={providerPubKey}
                generateResults={generateResults}
                provider={provider}
                setProvider={setProvider}
              />
            }
          >
            <Route
              index
              element={
                <MainPage
                  handleClickSOL={handlePaySOL}
                  handleClickDHMT={handlePayDHMT}
                />
              }
            />
            <Route
              path={routes.raffle}
              element={
                <PrivateRoute transferTokenStatus={providerPubKey}>
                  <RafflePage
                    providerPubKey={providerPubKey}
                    setAlertState={setAlertState}
                    setLoading={setLoading}
                    provider={provider}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.membership}
              element={
                <PrivateRoute transferTokenStatus={providerPubKey}>
                  <MembershipPage handlePayDHMT={handlePayDHMT} />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.test1}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <TestPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.test2}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <TestPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.test3}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <TestPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.premium}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <PremiumPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.premia}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <PremiaPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.alpha}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <AlphaPage />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.crossword}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <CrosswordPage
                    gameRef={gameRef}
                    gameReseted={gameReseted}
                    setGameReseted={setGameReseted}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.discount}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <DiscountPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path={routes.notFound} element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {location.pathname === routes.crossword && (
        <ModalSuccess
          transactionSignature={transactionSignature}
          openSuccessModal={openSuccessModal}
          toggleSuccessModal={toggleSuccessModal}
        />
      )}

      {location.pathname === routes.crossword && (
        <ModalSubmit
          timeDuration={timeDuration}
          submitResults={submitResults}
          initialResults={initialResults}
          providerPubKey={providerPubKey}
          openSubmitModal={openSubmitModal}
          toggleSubmitModal={toggleSubmitModal}
          toggleSuccessModal={toggleSuccessModal}
        />
      )}

      <Loader isLoading={loading} />
      <Notification alertState={alertState} setAlertState={setAlertState} />
    </>
  );
};

export default App;
