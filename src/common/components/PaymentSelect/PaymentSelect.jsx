import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ReactComponent as ArrowForward } from 'assets/icons/arrow.svg';
import { SOLamount, DHMTamount } from 'common/static/constants';
import { styles } from './PaymentSelect.styles';
import staticContent from 'common/static/content.json';

const { selectPayment, sol, dhmt } = staticContent.pages.home;

const PaymentSelect = ({ handleClickSOL, handleClickDHMT }) => (
  <Box sx={styles.select} component="section">
    <Typography sx={styles.title} variant="h3">
      {selectPayment}
    </Typography>
    <Box sx={styles.buttons}>
      <Button sx={styles.button} onClick={handleClickSOL}>
        <Typography sx={styles.buttonText} variant="h3">
          {SOLamount} {sol}
        </Typography>
        <ArrowForward />
      </Button>
      <Button sx={styles.button} onClick={handleClickDHMT}>
        <Typography sx={styles.buttonText} variant="h3">
          {DHMTamount} {dhmt}
        </Typography>
        <ArrowForward />
      </Button>
    </Box>
  </Box>
);

export default PaymentSelect;
