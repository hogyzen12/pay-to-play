import { Suspense, useEffect, useState, useRef } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { Box, Typography, Backdrop, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { confirmAlert } from 'react-confirm-alert';
import * as splToken from '@solana/spl-token';
import emailjs from '@emailjs/browser';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import {
  MainPage,
  MembershipPage,
  MerchandisePage,
  CrosswordPage,
  RafflePage,
  NotFoundPage,
  ArticlesPage,
  routes,
  articlesRoutes,
} from './routes';
import { Loader, Notification, Modal } from 'common/components';
import { localStorageGet, localStorageSet } from 'common/utils/localStorage';
import { transferCustomToken } from 'common/utils/transferToken';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { initialResults } from 'common/static/results';
import { PrivateRoute } from 'common/hoc/PrivateRoute';
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
  txLink,
} from 'common/static/constants';
import 'common/utils/bufferFill';
import AppLayout from 'common/layout/AppLayout';
import { ArticlesLayout } from 'common/layout';
import { getAllNFTs } from 'common/utils/getAllNFTs';
import { loaderActive, loaderDisabled } from 'redux/loader/loaderSlice';
import { modalOpened } from 'redux/modal/modalSlice';
import { notificationOpened } from 'redux/notification/notificationSlice';
import {
  setProviderPubKey,
  setTransferTokenStatus,
} from 'redux/provider/providerSlice';

let lamportsRequiredToPlay = 0.1 * LAMPORTS_PER_SOL;
expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timeAmount);

const App = () => {
  const [transactionSignature, setTransactionSignature] = useState('');
  const [openAgreement, setOpenAgreement] = useState(true);
  const [gameReseted, setGameReseted] = useState(false);
  const [timeDuration, setTimeDuration] = useState('00:00');

  const { isLoading } = useSelector(state => state.loader);
  const { provider, providerPubKey } = useSelector(state => state.provider);
  const { isModalOpen, modalType } = useSelector(state => state.modal);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameRef = useRef();

  const { hours, minutes, seconds, start, restart, pause, resume } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      switch (pathname) {
        case routes.crossword:
          return generateResults();
        case routes.raffle:
        case routes.membership:
        case routes.merchandise:
          return pause();
        default:
          navigate(routes.home);
          resetTimer();
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
    !openAgreement ? start() : pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAgreement]);

  useEffect(() => {
    if (provider && !provider.isConnected) provider.connect();
  }, [provider]);

  useEffect(() => {
    if (provider) {
      provider.on('connect', async () => {
        dispatch(
          notificationOpened({
            open: true,
            message: 'Wallet got connected',
            severity: 'success',
            tx: '',
          }),
        );
        dispatch(setProviderPubKey(provider.publicKey));
      });

      provider.on('disconnect', () => {
        dispatch(
          notificationOpened({
            open: true,
            message: 'Disconnected from wallet',
            severity: 'error',
            tx: '',
          }),
        );
      });
    }
  }, [provider, dispatch]);

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
      dispatch(
        notificationOpened({
          open: true,
          message: 'Please connect your wallet',
          severity: 'info',
          tx: '',
        }),
      );

      return;
    }

    /*
     * Check if the user has SOL in his wallet
     */

    const accountBalance = await connection.getBalance(providerPubKey);
    const balanceInLamports = accountBalance ? parseInt(accountBalance) : 0;

    if (balanceInLamports < lamportsRequiredToPlay) {
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

    dispatch(loaderActive());
    lamportsRequiredToPlay = lamportsRequiredToPlay / LAMPORTS_PER_SOL;

    const result = await transferCustomToken(
      provider,
      connection,
      lamportsRequiredToPlay,
      providerPubKey,
      gameWalletPublicKey,
    );

    if (!result.status) {
      dispatch(setTransferTokenStatus(result.status));

      dispatch(loaderDisabled());
      dispatch(
        notificationOpened({
          open: true,
          message: 'Error in sending the tokens, Please try again',
          severity: 'error',
          tx: '',
        }),
      );

      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */

    dispatch(setTransferTokenStatus(result.status));
    dispatch(loaderDisabled());

    navigate(selectedItem);
  };

  const handlePayDHMT = async (
    selectedItem,
    currency,
    hashMemo,
    emailAddress,
  ) => {
    const isSHDW = currency === 'SHDW';
    const isFree = currency === 'free';

    console.log('currency', currency);

    /*
     * Flow to play the game
     * 1. Check if the user is logged in
     * 2. Check the wallet has a DMND in it
     * 3. If no DMND then ask them to stake and get some
     * 4. If Diamond present then proceed
     * Check if the user is logged in
     */

    if (!providerPubKey) {
      dispatch(
        notificationOpened({
          open: true,
          message: 'Please connect your wallet',
          severity: 'info',
          tx: '',
        }),
      );

      return;
    }

    if (isFree && selectedItem === routes.articles) {
      navigate(routes.articles);

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

      dispatch(loaderActive());

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
        dispatch(setTransferTokenStatus(result.status));

        dispatch(loaderDisabled());
        dispatch(
          notificationOpened({
            open: true,
            message: 'Error in sending the tokens, Please try again',
            severity: 'error',
            tx: '',
          }),
        );

        return;
      }

      if (emailAddress) {
        const templateParams = {
          to_email: emailAddress,
          my_html: `
						<span>You can check your transaction status:</span>
						<a href="${txLink}/${result.signature}">
							here
						</a>
						`,
        };

        emailjs
          .send(
            process.env.REACT_APP_SERVICE_ID || '',
            process.env.REACT_APP_TEMPLATE_ID || '',
            templateParams,
            process.env.REACT_APP_PUBKEY || '',
          )
          .then(console.log)
          .catch(console.log);
      }

      /*
       * If the status is true, that means transaction got successful and we can proceed
       */

      console.log('result.signature', result.signature);

      dispatch(
        notificationOpened({
          open: true,
          message: 'Submitted transaction confirmed',
          severity: 'success',
          tx: '',
        }),
      );

      // console.log('result.status', result.status);
      dispatch(setTransferTokenStatus(result.status));
      dispatch(loaderDisabled());
      selectedItem && navigate(selectedItem);
    } catch (error) {
      console.log('SHDW error :>> ', error);

      dispatch(
        notificationOpened({
          open: true,
          message: 'Failed to get token account balance',
          severity: 'error',
          tx: '',
        }),
      );
    }
  };

  const handleOpenMembership = async () => {
    /*
     * Handle click membership card button
     */

    if (!providerPubKey) {
      dispatch(
        notificationOpened({
          open: true,
          message: 'Please connect your wallet',
          severity: 'info',
          tx: '',
        }),
      );

      return;
    }

    getAllNFTs(connection, providerPubKey);
  };

  const openSubmitModal = () => {
    dispatch(modalOpened('submit'));

    if (isModalOpen && modalType === 'submit') resume();
  };

  const openSuccessModal = () => {
    dispatch(modalOpened('success'));
  };

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10799);
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
    openSubmitModal();
  };

  const submitResults = async () => {
    openSubmitModal();

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
    dispatch(loaderActive());

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

      dispatch(loaderDisabled());
      dispatch(
        notificationOpened({
          open: true,
          message: 'Error in sending the tokens, Please try again',
          severity: 'error',
          tx: '',
        }),
      );

      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */

    // console.log('result.status', result.status);

    if (result.signature) {
      setTransactionSignature(result.signature);
      openSuccessModal();
    }

    dispatch(loaderDisabled());
  };

  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route
            path={routes.home}
            element={
              <AppLayout
                hours={hours}
                seconds={seconds}
                minutes={minutes}
                resetTimer={resetTimer}
                generateResults={generateResults}
              />
            }
          >
            <Route
              index
              element={
                <MainPage
                  handleClickSOL={handlePaySOL}
                  handleClickDHMT={handlePayDHMT}
                  handleOpenMembership={handleOpenMembership}
                />
              }
            />
            <Route
              path={routes.raffle}
              element={
                providerPubKey ? (
                  <RafflePage connection={connection} />
                ) : (
                  <Navigate to={routes.home} />
                )
              }
            />
            <Route
              path={routes.membership}
              element={
                providerPubKey ? (
                  <MembershipPage handlePayDHMT={handlePayDHMT} />
                ) : (
                  <Navigate to={routes.home} />
                )
              }
            />
            <Route
              path={routes.crossword}
              element={
                <PrivateRoute>
                  <CrosswordPage
                    gameRef={gameRef}
                    gameReseted={gameReseted}
                    setGameReseted={setGameReseted}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path={routes.merchandise}
              element={
                <PrivateRoute>
                  <MerchandisePage />
                </PrivateRoute>
              }
            />
          </Route>

          <Route
            path={routes.articles}
            element={
              providerPubKey ? (
                <ArticlesLayout
                  hours={hours}
                  seconds={seconds}
                  minutes={minutes}
                  openAgreement={openAgreement}
                  setOpenAgreement={setOpenAgreement}
                />
              ) : (
                <Navigate to={routes.home} />
              )
            }
          >
            <Route
              index
              element={
                <ArticlesPage
                  handleClickSOL={handlePaySOL}
                  handleClickDHMT={handlePayDHMT}
                />
              }
            />
            {articlesRoutes.map(({ path, component: Article }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PrivateRoute>
                    <Article />
                  </PrivateRoute>
                }
              />
            ))}
          </Route>

          <Route path={routes.notFound} element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {isModalOpen && pathname === routes.crossword && (
        <Modal
          pause={pause}
          timeDuration={timeDuration}
          submitResults={submitResults}
          initialResults={initialResults}
          transactionSignature={transactionSignature}
        />
      )}

      <Loader isLoading={isLoading} />
      <Notification />
    </>
  );
};

export default App;
