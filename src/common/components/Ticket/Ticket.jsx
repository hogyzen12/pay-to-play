import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as splToken from '@solana/spl-token';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useCountdown, useProvider } from 'common/hooks';
import { PayButton, Countdown } from 'common/components';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { loaderActive, loaderDisabled } from 'redux/loader/loaderSlice';
import { notificationOpened } from 'redux/notification/notificationSlice';
import { styles } from './Ticket.styles';
import { formatEntryMemo } from 'common/static/formatEntryMemo';
import {
  tokenMint,
  solscanUrl,
  DHMTamount,
  diamondsRequiredToPlay,
  DMND,
} from 'common/static/constants';
import staticContent from 'common/static/content.json';

const { sold, possible, closed, ends } = staticContent.pages.raffle;

const Ticket = ({
  ticket: {
    title,
    image,
    possibleWinners,
    selectedPage,
    transitionDelay,
    targetDate,
    targetTime,
    raffleMemo,
    raffleWalletPublicKey,
  },
  connection,
}) => {
  const [multiEntryDMNDsAmount, setMultiEntryDMNDsAmount] = useState(3);
  const [rafflesSold, setRafflesSold] = useState(0);
  const [winners, setWinners] = useState(0);
  const { provider, providerPubKey } = useProvider();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    targetDate,
    targetTime,
  );

  const dispatch = useDispatch();

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

  const handlePayRaffle = async (_, currency) => {
    const isSingleEntry = currency === DMND + 'single';
    const isMultiEntry = currency === DMND + 'multi';

    console.log('%cIsSingleEntry', 'color: green', isSingleEntry);
    console.log('%cIsMultiEntry', 'color: green', isMultiEntry);

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

    try {
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

      console.log(
        '%cDiamondAddress',
        'color: green',
        diamondAddress.toString(),
      );
      console.log('%cRaffleAddress', 'color: green', raffleAddress.toString());
      console.log('found ATA');

      if (!diamondAddress && !raffleAddress) {
        dispatch(
          notificationOpened({
            open: true,
            message: 'Associated token address not found',
            severity: 'info',
            tx: '',
          }),
        );

        return;
      }

      /*
       * Address found and we pull balance succesfully here
       * Print to console the amount to check
       */

      const diamondBalance = await connection.getTokenAccountBalance(
        diamondAddress,
      );

      /*
       * Go here and check to see they can afford with diamonds
       */
      if (isSingleEntry && diamondBalance?.value?.amount < 1) {
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

      if (
        isMultiEntry &&
        diamondBalance?.value?.amount < multiEntryDMNDsAmount
      ) {
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
       *
       */

      const raffleBalance = await connection.getTokenAccountBalance(
        raffleAddress,
      );
      console.log('%cUiAmount', 'color: green', raffleBalance.value.uiAmount);

      const DMNDamount = isMultiEntry ? multiEntryDMNDsAmount : 1; // !UPDATED ROW
      console.log('%cDMNDamount set by user', 'color: green', DMNDamount);

      const entryValue = raffleBalance.value.uiAmount + DMNDamount; // !UPDATED ROW
      console.log('%cEntryValue', 'color: green', entryValue);

      const formatedMemo = formatEntryMemo(
        raffleBalance.value.uiAmount,
        multiEntryDMNDsAmount,
      );
      console.log('%cFormatedEntryValue', 'color: yellow', formatedMemo);

      const raffleEntryMemo =
        raffleMemo + (isMultiEntry ? formatedMemo : entryValue.toString());
      console.log('%cRaffleEntryMemo', 'color: yellow', raffleEntryMemo);

      dispatch(
        notificationOpened({
          open: true,
          message: raffleEntryMemo,
          severity: 'success',
          tx: '',
        }),
      );

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
        isMultiEntry ? multiEntryDMNDsAmount : diamondsRequiredToPlay, // !UPDATED ROW
        raffleEntryMemo,
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

      /*
       * If the status is true, that means transaction got successful and we can proceed
       */

      dispatch(loaderDisabled());
      dispatch(
        notificationOpened({
          open: true,
          severity: 'success',
          message: `Raffle entry ${entryValue}`,
          tx: `${solscanUrl}/${result.signature}`,
        }),
      );

      setRafflesSold(entryValue);
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

  const handleIncreaseAmount = () => {
    setMultiEntryDMNDsAmount(multiEntryDMNDsAmount + 1);
  };

  const handleDecreaseAmount = () => {
    if (multiEntryDMNDsAmount <= 1) return;

    setMultiEntryDMNDsAmount(multiEntryDMNDsAmount - 1);
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
            currency={DMND + 'single'}
            amount={DHMTamount}
            handlePay={handlePayRaffle}
            selectedPage={selectedPage}
            customStyles={{ mb: 1, width: '100%' }}
          />
        )}
        {!isExpired && (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
            }}
          >
            <PayButton
              title={`entry (${multiEntryDMNDsAmount} DMND)`}
              currency={DMND + 'multi'}
              amount={DHMTamount}
              handlePay={handlePayRaffle}
              selectedPage={selectedPage}
              customStyles={{ width: '100%' }}
            />
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <Button sx={styles.setButton} onClick={handleIncreaseAmount}>
                <AddIcon sx={styles.icon} />
              </Button>
              <Button sx={styles.setButton} onClick={handleDecreaseAmount}>
                <RemoveIcon sx={styles.icon} />
              </Button>
            </Box>
          </Box>
        )}
      </CardActions>
    </Card>
  );
};

export default Ticket;
