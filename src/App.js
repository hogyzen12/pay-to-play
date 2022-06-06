import { Suspense, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';
import * as splToken from '@solana/spl-token';

import { Loader, Notification, Modal, NoBalance } from 'common/components';
import { AppLayout, ArticlesLayout } from 'common/layout';
import { useModal, useProvider, useLoader } from 'common/hooks';
import { loaderActive, loaderDisabled } from 'redux/loader/loaderSlice';
import { notificationOpened } from 'redux/notification/notificationSlice';
import { transferCustomToken } from 'common/utils/transferToken';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { sendEmail } from 'common/utils/misc';
import { getAllNFTs } from 'common/utils/getAllNFTs';
import { PrivateRoute } from 'common/hoc/PrivateRoute';
import { LimitedRoute } from 'common/hoc/LimitedRoute';
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
  tokenMint,
  utilMemo,
  memberAddress,
  nonMemberAddress,
} from 'common/static/constants';

let lamportsRequiredToPlay = 0.1 * LAMPORTS_PER_SOL;

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
    member,
  ) => {
    const isSHDW = currency === 'SHDW';
    const isFree = currency === 'free';

    console.log('selectedItem', selectedItem);
    console.log('currency', currency);
    console.log('hashMemo', hashMemo);
    console.log('emailAddress', emailAddress);
    console.log('member', member);

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
        sendEmail(emailAddress, 'user');

        member
          ? sendEmail(memberAddress, 'member')
          : sendEmail(nonMemberAddress, 'member');
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

    /*
     * !TODO: Error on getting NFTs
     */

    const nftsmetadata = await getAllNFTs(connection, providerPubKey);

    /*
     * Allow user to access the page
     */
    navigate(routes.membership);
  };

  // const handlePay = (
  //   selectedItem,
  //   currency,
  //   hashMemo,
  //   emailAddress,
  //   member,
  // ) => {
  //   const isSHDW = currency === 'SHDW';
  //   const isFree = currency === 'free';

  //   console.log('selectedItem', selectedItem);
  //   console.log('currency', currency);
  //   console.log('hashMemo', hashMemo);
  //   console.log('emailAddress', emailAddress);
  //   console.log('member', member);

  //   /*
  //    * Flow to play the game
  //    * 1. Check if the user is logged in
  //    * 2. Check the wallet has a DMND in it
  //    * 3. If no DMND then ask them to stake and get some
  //    * 4. If Diamond present then proceed
  //    * Check if the user is logged in
  //    */

  //   if (!providerPubKey) {
  //     dispatch(
  //       notificationOpened({
  //         open: true,
  //         message: 'Please connect your wallet',
  //         severity: 'info',
  //         tx: '',
  //       }),
  //     );

  //     return;
  //   }

  //   if (isFree) {
  //     switch (selectedItem) {
  //       case routes.articles:
  //         navigate(routes.articles);
  //         return;
  //       case routes.membership:
  //         navigate(routes.membership);
  //         return;
  //       case routes.raffle:
  //         navigate(routes.raffle);
  //         return;
  //       default:
  //         navigate(routes.home);
  //     }
  //   }
  // };

  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Routes>
          <Route path={routes.home} element={<AppLayout />}>
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
                <LimitedRoute
                  component={<RafflePage connection={connection} />}
                />
              }
            />
            <Route
              path={routes.membership}
              element={
                <LimitedRoute
                  component={<MembershipPage handlePayDHMT={handlePayDHMT} />}
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

          <Route
            path={routes.articles}
            element={<LimitedRoute component={<ArticlesLayout />} />}
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
                element={<PrivateRoute component={<Article />} />}
              />
            ))}
          </Route>

          <Route path={routes.notFound} element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {isModalOpen && <Modal connection={connection} />}
      <Loader isLoading={isLoading} />
      <Notification />
    </>
  );
};

export default App;
