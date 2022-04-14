import { Suspense, useEffect, useState, useRef } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Typography, Backdrop, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { useScreenshot } from 'use-react-screenshot';
import { confirmAlert } from 'react-confirm-alert';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';
import {
  ArticlesPage,
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
import { PrivateRoute } from 'common/utils/PrivateRoute';
import { initialAlersState } from 'common/static/alert';
import { routes } from './routes';
import AppLayout from 'common/layout/AppLayout';
import 'react-confirm-alert/src/react-confirm-alert.css';

let lamportsRequiredToPlay = 0.1 * LAMPORTS_PER_SOL;
const NETWORK = clusterApiUrl('devnet');
const gameWalletPublicKey = new PublicKey(
  '62AtDMhgaW1YQZCxv7hGBE7HDTU67L71vs4VQrRVBq3p',
);

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

  /*
   * Connection to the Solana cluster
   */

  const connection = new Connection(NETWORK);

  /*
   * React will call this useEffect everytime there is update in the provider variable.
   * Phantom provider provides 2 methods to listen on
   * 1. connect -> This method gets triggered when the wallet connection is successful
   * 2. disconnect -> This callback method gets triggered when the wallet gets disconnected from the application
   */

  useEffect(() => {
    if (provider && !provider.isConnected) {
      provider.connect();
    }
  }, [provider]);

  useEffect(() => {
    if (provider) {
      provider.on('connect', async () => {
        console.log('wallet got connected', provider.publicKey);

        setAlertState({
          open: true,
          message: 'wallet got connected',
          severity: 'success',
        });

        setProviderPub(provider.publicKey);
      });
      provider.on('disconnect', () => {
        console.log('Disconnected from wallet');

        setAlertState({
          open: true,
          message: 'Disconnected from wallet',
          severity: 'error',
        });
      });
    }
  }, [provider]);

  const loginHandler = () => {
    console.log('connectWallet :>> ', provider);
    if (!provider && window.solana) {
      setProvider(window.solana);
    } else if (!provider) {
      console.log('No provider found');
      return;
    } else if (provider && !provider.isConnected) {
      provider.connect();
    }
  };

  const handlePaySOL = async selectedItem => {
    console.log(selectedItem);
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

  const handlePayDHMT = async selectedItem => {
    if (!providerPubKey) {
      // alert('Ooops... Please login via wallet');
      setAlertState({
        open: true,
        message: 'Please connect your wallet',
        severity: 'info',
      });

      return;
    }

    navigate(selectedItem);
  };

  const onAlertClose = () => {
    setAlertState(initialAlersState);
  };

  const handleOpenSubmitModal = () => {
    setOpenSubmitModal(true);
  };

  const handleCloseSubmitModal = () => {
    setOpenSubmitModal(false);
  };

  const handleOpenSuccessModal = () => {
    setOpenSuccessModal(true);
  };

  const handleCloseSuccessModal = () => {
    setOpenSuccessModal(false);
  };

  const getImage = () => {
    takeScreenshot(gameRef.current);
  };

  const submitResult = () => {
    getImage();
    handleOpenSubmitModal();
  };

  const resetResult = () => {};

  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route
            path={routes.home}
            element={
              <AppLayout
                providerPubKey={providerPubKey}
                loginHandler={loginHandler}
                resetResult={resetResult}
                submitResult={submitResult}
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
                />
              }
            />
            <Route
              path={routes.articles}
              element={
                // <PrivateRoute transferTokenStatus={transferTokenStatus}>
                <ArticlesPage />
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
            <Route
              path={routes.crossword}
              element={
                <PrivateRoute transferTokenStatus={transferTokenStatus}>
                  <CrosswordPage gameRef={gameRef} resetResult={resetResult} />
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
        handleCloseSuccessModal={handleCloseSuccessModal}
      />
      <ModalSubmit
        openSubmitModal={openSubmitModal}
        handleCloseSubmitModal={handleCloseSubmitModal}
        handleOpenSubmitModal={handleOpenSubmitModal}
        handleOpenSuccessModal={handleOpenSuccessModal}
      />
    </>
  );
};

export default App;
