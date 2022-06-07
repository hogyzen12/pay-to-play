import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import * as splToken from '@solana/spl-token';
import { Loader, Notification, Modal } from 'common/components';
import { AppLayout, ArticlesLayout } from 'common/layout';
import { useModal, useProvider, useLoader } from 'common/hooks';
import { setTransactionSignature } from 'redux/provider/providerSlice';
import { loaderActive, loaderDisabled } from 'redux/loader/loaderSlice';
import { notificationOpened } from 'redux/notification/notificationSlice';
import { modalOpened } from 'redux/modal/modalSlice';
import { transferCustomToken } from 'common/utils/transferToken';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { sendEmail } from 'common/utils/misc';
import { getAllNFTs } from 'common/utils/getAllNFTs';
import { PrivateRoute } from 'common/hoc/PrivateRoute';
import { LimitedRoute } from 'common/hoc/LimitedRoute';
import checklist from 'common/static/checklist.json';
import 'common/utils/bufferFill';
import {
  setProviderPubKey,
  setTransferTokenStatus,
} from 'redux/provider/providerSlice';
import {
  MainPage,
  MembershipPage,
  MerchandisePage,
  CrosswordPage,
  RafflePage,
  NotFoundPage,
  ArticlesPage,
  articlesRoutes,
  routes,
} from './routes';
import {
  NETWORK,
  diamondsRequiredToPlay,
  gameWalletPublicKey,
  shadowMint,
  shadowRequiredToPlay,
  lamportsRequiredToPlay,
  tokenMint,
  utilMemo,
  memberAddress,
  nonMemberAddress,
  DMND,
  FREE,
  SHDW,
  SOL,
} from 'common/static/constants';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { provider, providerPubKey } = useProvider();
  const { isLoading } = useLoader();
  const { isModalOpen } = useModal();

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

  const openMembership = async () => {
    const nftaccount = await getAllNFTs(connection, providerPubKey);
    const filteredAccount = nftaccount.filter(item => item.amount === '1');

    if (!filteredAccount.length) {
      console.log('%cFilteredAccount empty', 'color: red', filteredAccount);

      /*
       * If no amount === "1" - show message
       */

      dispatch(
        notificationOpened({
          open: true,
          message: `my name is Bill`,
          severity: 'info',
          tx: '',
        }),
      );
    } else {
      console.log(
        '%cFilteredAccount inclued amount === "1"',
        'color: orange',
        filteredAccount,
      );
      filteredAccount.forEach(({ mint }) => {
        const finded = checklist.find(item => item.mint_account === mint);

        console.log('%cNFT is in checklist :>> ', 'color: green', finded);

        if (finded) {
          /*
           * Allow user to access the page
           */

          navigate(routes.membership);
        } else {
          /*
           * If not in checklist - show message
           */

          dispatch(
            notificationOpened({
              open: true,
              message: `my name is Bill`,
              severity: 'info',
              tx: '',
            }),
          );
        }
      });
    }
  };

  const paySOL = async redirect => {
    /*
     * Flow to play the game
     * 1. Check the wallet has SOL in it
     * 2. If no SOL then ask him to fund the wallet first
     * 3. If required SOL present the, proceed with the transaction
     *
     */

    /*
     * Check if the user has SOL in his wallet
     */

    const accountBalance = await connection.getBalance(providerPubKey);
    const balanceInLamports = accountBalance ? parseInt(accountBalance) : 0;

    if (balanceInLamports < lamportsRequiredToPlay) {
      const fundNeededToPlay = lamportsRequiredToPlay - balanceInLamports;

      dispatch(
        notificationOpened({
          open: true,
          message: `Please fund your wallet with ${
            fundNeededToPlay / LAMPORTS_PER_SOL
          } SOL tokens`,
          severity: 'info',
          tx: '',
        }),
      );

      return;
    }

    /*
     * If user has required SOL in the wallet, then deduct the amount
     */

    dispatch(loaderActive());

    const requiredLamports = lamportsRequiredToPlay / LAMPORTS_PER_SOL;

    const result = await transferCustomToken(
      provider,
      connection,
      requiredLamports,
      providerPubKey,
      gameWalletPublicKey,
    );

    if (!result.status) {
      dispatch(setTransferTokenStatus(result.status));
      dispatch(loaderDisabled());
      dispatch(
        notificationOpened({
          open: true,
          message: result.error
            ? result.error
            : 'Error in sending the tokens, Please try again',
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

    if (redirect) navigate(redirect);
  };

  const payDHMT = async (
    selectedItem,
    currency,
    hashMemo,
    emailAddress,
    member,
    resultsSubmit = false,
  ) => {
    /*
     * Flow to play the game
     * 1. Check the wallet has a DMND in it
     * 2. If no DMND then ask them to stake and get some
     * 3. If Diamond present then proceed
     * Check if the user is logged in
     */

    /*
     * Check if the user has diamonds in their wallet
     * And use the value to check if they can afford the game
     */
    const diamondAddress = await splToken.getAssociatedTokenAddress(
      currency === SHDW ? shadowMint : tokenMint,
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

      /*
       * Go here and check to see they can afford with diamonds
       */

      if (diamondBalance?.value?.amount < 1) {
        dispatch(
          notificationOpened({
            open: true,
            message: `You need to have at least 1 DMND`,
            severity: 'info',
            tx: '',
          }),
        );

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
        currency === SHDW ? shadowMint : tokenMint,
        providerPubKey,
        gameWalletPublicKey,
        diamondBalance.value.amount,
        currency === SHDW ? shadowRequiredToPlay : diamondsRequiredToPlay,
        hashMemo ? hashMemo : utilMemo,
      );

      if (!result.status) {
        dispatch(loaderDisabled());
        dispatch(
          notificationOpened({
            open: true,
            message: 'Error in sending the tokens, please try again',
            severity: 'error',
            tx: '',
          }),
        );

        return;
      }

      if (result.signature) {
        dispatch(setTransferTokenStatus(result.status));
        dispatch(setTransactionSignature(result.signature));
      }

      if (emailAddress) {
        sendEmail(emailAddress, 'user');

        member
          ? sendEmail(memberAddress, 'member')
          : sendEmail(nonMemberAddress, 'member');
      }

      /*
       * If the status is true, that means transaction got successful and we can proceed
       */

      dispatch(
        notificationOpened({
          open: true,
          message: 'Submitted transaction confirmed',
          severity: 'success',
          tx: '',
        }),
      );

      dispatch(loaderDisabled());
      if (resultsSubmit) dispatch(modalOpened('success'));

      if (selectedItem) navigate(selectedItem);
    } catch (error) {
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

  const handlePay = (
    selectedItem,
    currency,
    hashMemo,
    emailAddress,
    member,
    result,
  ) => {
    console.log('%cSelectedItem', 'color: orange', selectedItem);
    console.log('%cCurrency', 'color: orange', currency);
    console.log('%cHashMemo', 'color: orange', hashMemo);
    console.log('%cemailAddress', 'color: orange', emailAddress);
    console.log('%cMember', 'color: orange', member);

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

    if (currency === FREE) {
      switch (selectedItem) {
        case routes.articles:
          navigate(routes.articles);
          return;
        case routes.membership:
          openMembership();
          return;
        case routes.raffle:
          navigate(routes.raffle);
          return;
        default:
          null;
      }
    } else {
      switch (currency) {
        case SOL:
          paySOL(selectedItem);
          return;
        case SHDW:
        case DMND:
          payDHMT(
            selectedItem,
            currency,
            hashMemo,
            emailAddress,
            member,
            result,
          );
          return;
        default:
          null;
      }
    }
  };

  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route path={routes.home} element={<AppLayout />}>
            <Route index element={<MainPage handlePay={handlePay} />} />
            <Route
              path={routes.raffle}
              element={
                <LimitedRoute
                  component={<RafflePage connection={connection} />}
                />
              }
            />
            <Route
              path={routes.membership}
              element={
                <LimitedRoute
                  component={<MembershipPage handlePay={handlePay} />}
                />
              }
            />
            <Route
              path={routes.crossword}
              element={<PrivateRoute component={<CrosswordPage />} />}
            />
            <Route
              path={routes.merchandise}
              element={<PrivateRoute component={<MerchandisePage />} />}
            />
          </Route>

          <Route path={routes.articles} element={<ArticlesLayout />}>
            <Route
              index
              element={
                <LimitedRoute
                  component={<ArticlesPage handlePay={handlePay} />}
                />
              }
            />
            {articlesRoutes.map(({ path, component: Article }) => (
              <Route
                key={path}
                path={path}
                element={<PrivateRoute component={<Article />} />}
              />
            ))}
          </Route>

          <Route path={routes.notFound} element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {isModalOpen && <Modal handlePay={handlePay} />}
      <Loader isLoading={isLoading} />
      <Notification />
    </>
  );
};

export default App;
