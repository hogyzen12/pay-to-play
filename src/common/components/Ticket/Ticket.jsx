import React, { useState, useEffect } from 'react';
import * as splToken from '@solana/spl-token';
import { confirmAlert } from 'react-confirm-alert';
import { Connection } from '@solana/web3.js';
import { Close as CloseIcon } from '@mui/icons-material';
import {
  Box,
  Card,
  Link,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Backdrop,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';

import { NETWORK, tokenMint, txLink } from 'common/static/constants';
import { useCountdown } from 'common/hooks/useCountdown';
import { PayButton, Countdown } from 'common/components';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { DHMTamount, diamondsRequiredToPlay } from 'common/static/constants';
import { styles } from './Ticket.styles';
import staticContent from 'common/static/content.json';

const { dhmt } = staticContent.pages.main;
const { sold, winners, closed, ends } = staticContent.pages.raffle;

const Ticket = ({
  title,
  image,
  selectedPage,
  transitionDelay,
  providerPubKey,
  setAlertState,
  setLoading,
  provider,
  targetDate,
  targetTime,
  raffleMemo,
  raffleWalletPublicKey,
}) => {
  const [rafflesSold, setRafflesSold] = useState(0);
  const [winner, setWinner] = useState('Will Smith');
  const connection = new Connection(NETWORK, 'confirmed');
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

  const handlePayRaffle = async (selectedItem, currency) => {
    if (!providerPubKey) {
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
      tokenMint,
      providerPubKey,
      raffleWalletPublicKey,
      diamondBalance.value.amount,
      diamondsRequiredToPlay,
      raffleEntryMemo,
    );

    if (!result.status) {
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

    setLoading(false);
    setAlertState({
      open: true,
      duration: 7000,
      severity: 'info',
      message: `Raffle entry ${entryValue}`,
      tx: `${txLink}/${result.signature}`,
    });

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
            {!isExpired ? '1' : 'Winner:'}{' '}
            <Typography sx={isExpired ? styles.soldOut : null} component="span">
              {!isExpired ? winners : winner}
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
