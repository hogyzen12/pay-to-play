import { Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage, CrosswordPage, NotFoundPage } from './routes';
import { confirmAlert } from 'react-confirm-alert';
import { transferCustomToken } from './common/utils/transferToken';
import { Loader } from './common/components';
import { routes } from './routes';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';
import 'react-confirm-alert/src/react-confirm-alert.css';

import AppLayout from './common/layout/AppLayout';

const NETWORK = clusterApiUrl('devnet');
let lamportsRequiredToPlay = 0.1 * LAMPORTS_PER_SOL;
const gameWalletPublicKey = new PublicKey(
  '62AtDMhgaW1YQZCxv7hGBE7HDTU67L71vs4VQrRVBq3p',
);

const App = () => {
  const [provider, setProvider] = useState();
  const [providerPubKey, setProviderPub] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    if (provider) {
      provider.on('connect', async () => {
        console.log('wallet got connected', provider.publicKey);
        setProviderPub(provider.publicKey);
      });
      provider.on('disconnect', () => {
        console.log('Disconnected from wallet');
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

  const playStack = async () => {
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
      alert('Ooops... Please login via wallet');
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
          <div className="box">
            <div className="modal-container" id="m2-o">
              <div className="modal">
                {/* <div className="image-holder">
										 <img src={coins} alt="" />
									 </div> */}
                <h1 className="modal__title">
                  Oops!!! You do not have enough balance
                </h1>
                <p className="modal__text">
                  Please fund your wallet with{' '}
                  <b>{fundNeededToPlay / LAMPORTS_PER_SOL} SOL</b> tokens to
                  play the game.
                </p>
                <button className="modal__btn no" onClick={onClose}>
                  No
                </button>
                <button
                  className="modal__btn yes"
                  onClick={() => {
                    navigate(`/purchase/stack`);
                    onClose();
                  }}
                >
                  Fund wallet
                </button>
              </div>
            </div>
          </div>
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
      alert('Error in sending the tokens, Please try again!!!');
      return;
    }

    /*
     * If the status is true, that means transaction got successful and we can proceed
     */

    setLoading(false);
    // history.push('/stack');
    navigate('/crossword');
  };

  const handleClickDHMT = () => {
    console.log('DHMT button clicked'); // TODO: DHTM button click logic goes here <--
  };

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
              />
            }
          >
            <Route
              index
              element={
                <HomePage
                  handleClickSOL={playStack}
                  handleClickDHMT={handleClickDHMT}
                />
              }
            />
            <Route path={routes.crossword} element={<CrosswordPage />} />
            <Route path={routes.notFound} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
      <Loader isLoading={loading} />
    </>
  );
};

export default App;
