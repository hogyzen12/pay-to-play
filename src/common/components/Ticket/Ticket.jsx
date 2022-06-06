import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as splToken from '@solana/spl-token';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';

import {
  tokenMint,
  solscanUrl,
  DHMTamount,
  diamondsRequiredToPlay,
} from 'common/static/constants';
import { useCountdown, useProvider } from 'common/hooks';
import { PayButton, Countdown } from 'common/components';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { loaderActive, loaderDisabled } from 'redux/loader/loaderSlice';
import { notificationOpened } from 'redux/notification/notificationSlice';
import { styles } from './Ticket.styles';
import staticContent from 'common/static/content.json';

const { dhmt } = staticContent.pages.main;
const { sold, possible, closed, ends } = staticContent.pages.raffle;

const Ticket = ({
  title,
  image,
  possibleWinners,
  selectedPage,
  transitionDelay,
  connection,
  targetDate,
  targetTime,
  raffleMemo,
  raffleWalletPublicKey,
}) => {
  const [rafflesSold, setRafflesSold] = useState(0);
  const [winners, setWinners] = useState(0);
  const dispatch = useDispatch();
  const { provider, providerPubKey } = useProvider();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    targetDate,
    targetTime,
  );

  useEffect(() => {
    const getRaffle = async () => {
      const raffleAddress = await splToken.getAssociatedTokenAddress(
        tokenMint,
        raffleWalletPublicKey,
      );

      const raffleBalance = await connection.getTokenAccountBalance(
        raffleAddress,
      );

      const entryValue = raffleBalance.value.uiAmount;

      setRafflesSold(entryValue);
    };

    getRaffle();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isExpired) {
      setWinners(0);

      return;
    }
    if (!possibleWinners && rafflesSold) {
      const res = Math.floor(rafflesSold / 10);
      setWinners(res.toFixed(0));
    } else {
      setWinners(possibleWinners);
    }
  }, [possibleWinners, rafflesSold, isExpired]);

  const handlePayRaffle = async (selectedItem, currency) => {
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
     * Check if the user has diamonds in their wallet
     * And use the value to check if they can afford the game
     */

    const diamondAddress = await splToken.getAssociatedTokenAddress(
      tokenMint,
      providerPubKey,
    );

    /*
     * Check how many entries have been made
     * set ticket serial number appropiately
     * Using a dedicated wallet for the raffle to ensure init correctly
     */

    const raffleAddress = await splToken.getAssociatedTokenAddress(
      tokenMint,
      raffleWalletPublicKey,
    );

    /*
     * Output the ATA to console to check manually
     * TODO!!!! ADD ERROR HANDLE IF ATA NOT FOUND
     */
    console.log(diamondAddress.toString());
    console.log(raffleAddress.toString());
    console.log('found ATA');

    /*
     * Address found and we pull balance succesfully here
     * Print to console the amount to check
     */

    const diamondBalance = await connection.getTokenAccountBalance(
      diamondAddress,
    );

    const raffleBalance = await connection.getTokenAccountBalance(
      raffleAddress,
    );

    console.log(raffleBalance.value.uiAmount);

    const entryValue = raffleBalance.value.uiAmount + 1;
    console.log(entryValue);

    const raffleEntryMemo = raffleMemo + entryValue.toString();
    console.log(raffleEntryMemo);

    /*
     * Go here and check to see they can afford with diamonds
     */
    if (diamondBalance?.value?.amount < 1) {
      dispatch(
        notificationOpened({
          open: true,
          message: 'Not enough balance, please fund your wallet',
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
      tokenMint,
      providerPubKey,
      raffleWalletPublicKey,
      diamondBalance.value.amount,
      diamondsRequiredToPlay,
      raffleEntryMemo,
    );

    if (!result.status) {
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

    dispatch(loaderDisabled());
    dispatch(
      notificationOpened({
        open: true,
        severity: 'info',
        message: `Raffle entry ${entryValue}`,
        tx: `${solscanUrl}/${result.signature}`,
      }),
    );

    setRafflesSold(entryValue);
  };

  return (
    <Card
      sx={styles.ticket}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transitionDelay}
      component={motion.div}
    >
      <CardMedia
        sx={styles.image}
        alt={title}
        image={image}
        component="img"
        height="240"
      />

      <CardContent sx={styles.content}>
        <Typography sx={styles.title}>{title}</Typography>

        <Box sx={styles.stats}>
          <Typography sx={styles.sold} component="span">
            {rafflesSold}{' '}
            <Typography sx={isExpired ? styles.soldOut : null} component="span">
              {sold}
            </Typography>
          </Typography>
          <Typography sx={styles.winners} component="span">
            {winners}{' '}
            <Typography component="span">
              {winners > 1 ? `${possible}s` : possible}
            </Typography>
          </Typography>
        </Box>

        <Box sx={styles.status}>
          <Typography
            sx={!isExpired ? styles.countdown : styles.closed}
            variant={isExpired ? '' : 'h3'}
          >
            {!isExpired ? ends : closed}
          </Typography>

          {!isExpired && (
            <Countdown
              days={days}
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              isExpired={isExpired}
            />
          )}
        </Box>
      </CardContent>

      <CardActions sx={styles.actions} disableSpacing>
        {!isExpired && (
          <PayButton
            title="Purchase raffle entry (1 DMND)"
            currency={dhmt}
            amount={DHMTamount}
            handlePay={handlePayRaffle}
            selectedPage={selectedPage}
          />
        )}
      </CardActions>
    </Card>
  );
};

export default Ticket;
