import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as splToken from '@solana/spl-token';
import { confirmAlert } from 'react-confirm-alert';
import Countdown from 'react-countdown';
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Backdrop,
  IconButton,
  Paper,
} from '@mui/material';
import { routes } from 'routes';
import { motion } from 'framer-motion';
import { Close as CloseIcon } from '@mui/icons-material';

import {
  NETWORK,
  tokenMint,
  utilMemo,
  raffleWalletPublicKey,
  raffleMemo,
} from 'common/static/constants';
import { transferDiamondToken } from 'common/utils/transferDiamond';
import { PayButton } from 'common/components';
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
  start,
  end,
  date,
}) => {
  const [rafflesSold, setRafflesSold] = useState(0);
  const [raffleOpen, setRaffleOpen] = useState(true);
  const [isFixed, setIsFixed] = useState(
    start && end && date ? start.getTime() - Date.now() < 0 : false,
  );

  const navigate = useNavigate();
  const connection = new Connection(NETWORK, 'confirmed');

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

    setRafflesSold(entryValue);
    setLoading(false);

    setAlertState({
      open: true,
      message: `Raffle entry ${entryValue}`,
      severity: 'success',
    });

    setTimeout(() => {
      navigate(routes.home);
    }, 3000);
  };

  const renderCountdown = ({ days, hours, minutes, seconds, completed }) => {
    hours += days * 24;

    if (completed) {
      <Box sx={styles.done} component="span">
        Closed
      </Box>;
    } else {
      return (
        <Box sx={styles.root}>
          {isFixed && (
            <Paper sx={styles.paper} elevation={0}>
              <Box sx={styles.item} component="span">
                +
              </Box>
            </Paper>
          )}
          <Paper sx={styles.paper} elevation={0}>
            <Box sx={styles.item} component="span">
              {hours < 10 ? `0${hours}` : hours}
            </Box>
            <Box component="span">hrs</Box>
          </Paper>
          <Paper sx={styles.paper} elevation={0}>
            <Box sx={styles.item} component="span">
              {minutes < 10 ? `0${minutes}` : minutes}
            </Box>
            <Box component="span">mins</Box>
          </Paper>
          <Paper sx={styles.paper} elevation={0}>
            <Box sx={styles.item} component="span">
              {seconds < 10 ? `0${seconds}` : seconds}
            </Box>
            <Box component="span">secs</Box>
          </Paper>
        </Box>
      );
    }
  };

  return (
    <Card
      sx={styles.ticket}
      exit={{ opacity: 0 }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transitionDelay}
    >
      <CardMedia
        sx={styles.image}
        alt={title}
        image={image}
        component="img"
        height="240"
      />

      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant="h3">
          {title}
        </Typography>

        <Box sx={styles.stats}>
          <Typography sx={styles.sold} component="span">
            {rafflesSold} {sold}
          </Typography>
          <Typography sx={styles.winners} component="span">
            {raffleOpen ? '1' : '0'} {winners}
          </Typography>
        </Box>

        <Box sx={styles.status}>
          <Typography
            sx={raffleOpen ? styles.countdown : styles.closed}
            variant="h3"
          >
            {raffleOpen ? ends : closed}
          </Typography>
          <Countdown
            date={date}
            onComplete={() => {}}
            renderer={renderCountdown}
          />
        </Box>
      </CardContent>

      <CardActions sx={styles.actions} disableSpacing>
        {raffleOpen && (
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
