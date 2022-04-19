import { Suspense, useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Typography, Backdrop, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useScreenshot } from 'use-react-screenshot';
import { confirmAlert } from 'react-confirm-alert';
import { useTimer } from 'react-timer-hook';

import * as splToken from '@solana/spl-token';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';
import {
  AlphaPage,
  PremiaPage,
  PremiumPage,
  DiscountPage,
  CrosswordPage,
  NotFoundPage,
  MainPage,
} from './routes';
import {
  Loader,
  Notification,
  ModalSubmit,
  ModalSuccess,
} from 'common/components';
import { transferCustomToken } from 'common/utils/transferToken';
import { transferDiamondToken } from './common/utils/transferDiamond';
import './common/utils/bufferFill';

import { PrivateRoute } from 'common/utils/PrivateRoute';
import { initialAlersState } from 'common/static/alert';
import { routes } from './routes';
import AppLayout from 'common/layout/AppLayout';
import 'react-confirm-alert/src/react-confirm-alert.css';

const timeAmount = 3600; // one hour
const expiryTimestamp = new Date();
expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timeAmount);

let lamportsRequiredToPlay = 0.1 * LAMPORTS_PER_SOL;
let shadowRequiredToPlay = 1.0 * LAMPORTS_PER_SOL;
let diamondsRequiredToPlay = 1;

const web3 = require('@solana/web3.js');
const NETWORK = clusterApiUrl('mainnet-beta');
const gameWalletPublicKey = new PublicKey(
  'CproxWoLCk4QrCd3VJNUpo3QZf3bjEnTN1FuBcRbZYaw',
);
const tokenMint = new PublicKey('FdSBbLHK8hfc6BSqjrhQZaGj7jgd5vfPcchDB2RDAQFA');
const shadowMint = new PublicKey('SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y');

const App = () => {
  const [provider, setProvider] = useState();
  const [providerPubKey, setProviderPub] = useState();
  const [alertState, setAlertState] = useState(initialAlersState);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [transferTokenStatus, setTransferTokenStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, takeScreenshot] = useScreenshot();
  const navigate = useNavigate();
  const gameRef = useRef();
  const { seconds, minutes, isRunning, start, restart, pause } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn('onExpire called');
      navigate(routes.home);
    },
  });

  /*
   * Connection to the Solana cluster
   */

  const connection = new web3.Connection(NETWORK, 'confirmed');

  /*
   * React will call this useEffect everytime there is update in the provider variable.
   * Phantom provider provides 2 methods to listen on
   * 1. connect -> This method gets triggered when the wallet connection is successful
   * 2. disconnect -> This callback method gets triggered when the wallet gets disconnected from the application
   */

  useEffect(() => {
    console.log('isRunning', isRunning);
  }, [isRunning]);

  useEffect(() => {
    resetTimer();
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (provider && !provider.isConnected) {
      provider.connect();
    }
  }, [provider]);

  useEffect(() => {
    if (provider) {
      provider.on('connect', async () => {
        setAlertState({
          open: true,
          message: 'wallet got connected',
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

  const loginHandler = () => {
    if (!provider && window.solana) {
      setProvider(window.solana);
    } else if (!provider) {
      console.log('No provider found');
      return;
    } else if (provider && !provider.isConnected) {
      provider.connect();
    }
  };

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
      // alert('Ooops... Please login via wallet');
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
                Oops!!! You do not have enough balance
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
      // alert('Error in sending the tokens, Please try again!!!');
      setAlertState({
        open: true,
        message: 'Error in sending the tokens, Please try again!!!',
        severity: 'error',
      });
      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */

    setTransferTokenStatus(result.status);
    setLoading(false);
    // history.push('/stack');
    // navigate('/crossword');
    navigate(selectedItem);
  };

  const handlePayDHMT = async (selectedItem, currency) => {
    const isSHDW = currency === 'SHDW';
    /*
     * Flow to play the game
     * 1. Check if the user is logged in
     * 2. Check the wallet has a DMND in it
     * 3. If no DMND then ask them to stake and get some
     * 4. If Diamond present then proceed
     * Check if the user is logged in
     */

    if (!providerPubKey) {
      // alert('Ooops... Please login via wallet');
      setAlertState({
        open: true,
        message: 'Please connect your wallet',
        severity: 'info',
      });

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
    console.log(diamondAddress.toString());
    console.log('found ATA');

    /*
     * Address found and we pull balance succesfully here
     * Print to console the amount to check
     */
    const diamondBalance = await connection.getTokenAccountBalance(
      diamondAddress,
    );

    console.log(diamondBalance.value.amount);
    console.log('found balance');

    /*
     * Go here and check to see they can afford with diamonds
     */
    if (diamondBalance.value.amount < 1) {
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
                Oops!!! You do need more SOL for gas fees
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
    );

    if (!result.status) {
      setTransferTokenStatus(result.status);
      // alert('Error in sending the tokens, Please try again!!!');
      setAlertState({
        open: true,
        message: 'Error in sending the tokens, Please try again!!!',
        severity: 'error',
      });
      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */
    setTransferTokenStatus(result.status);
    setLoading(false);
    // history.push('/stack');
    // navigate('/crossword');
    navigate(selectedItem);
  };

  const onAlertClose = () => {
    setAlertState(initialAlersState);
  };

  const toggleSubmitModal = () => {
    setOpenSubmitModal(!openSubmitModal);
  };

  const toggleSuccessModal = () => {
    setOpenSuccessModal(!openSuccessModal);
  };

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 3599);
    restart(time);
  };

  const getImage = () => {
    takeScreenshot(gameRef.current);
  };

  const submitResult = () => {
    getImage();
    toggleSubmitModal();
  };

  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route
            path={routes.home}
            element={
              <AppLayout
                start={start}
                seconds={seconds}
                minutes={minutes}
                resetTimer={resetTimer}
                loginHandler={loginHandler}
                submitResult={submitResult}
                providerPubKey={providerPubKey}
              />
            }
          >
            {/* <Route
              index
              element={
                <HomePage
                  handleClickSOL={handlePaySOL}
                  handleClickDHMT={handlePayDHMT}
                />
              }
            /> */}
            <Route
              index
              element={
                <MainPage
                  handleClickSOL={handlePaySOL}
                  handleClickDHMT={handlePayDHMT}
                  handleClickSHDW={handlePayDHMT}
                />
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
                // <PrivateRoute transferTokenStatus={transferTokenStatus}>
                <CrosswordPage gameRef={gameRef} />
                // </PrivateRoute>
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

      <Loader isLoading={loading} />
      <Notification alertState={alertState} onAlertClose={onAlertClose} />
      <ModalSuccess
        openSuccessModal={openSuccessModal}
        toggleSuccessModal={toggleSuccessModal}
      />
      <ModalSubmit
        openSubmitModal={openSubmitModal}
        toggleSubmitModal={toggleSubmitModal}
        toggleSuccessModal={toggleSuccessModal}
      />
    </>
  );
};

export default App;
