import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ReactComponent as ArrowForward } from 'assets/icons/arrow.svg';
import staticContent from 'common/static/content.json';
import { styles } from './PaymentSelect.styles';

const amountSOL = '0.1';
const amountDHMT = '1';

const PaymentSelect = ({ handleClickSOL, handleClickDHMT }) => {
  const { selectPayment, sol, dhmt } = staticContent.pages.home;

  return (
    <Box sx={styles.select} component="section">
      <Typography sx={styles.title} variant="h3">
        {selectPayment}
      </Typography>
      <Box sx={styles.buttons}>
        <Button sx={styles.button} onClick={handleClickSOL}>
          <Typography sx={styles.buttonText} variant="h3">
            {amountSOL} {sol}
          </Typography>
          <ArrowForward />
        </Button>
        <Button sx={styles.button} onClick={handleClickDHMT}>
          <Typography sx={styles.buttonText} variant="h3">
            {amountDHMT} {dhmt}
          </Typography>
          <ArrowForward />
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentSelect;
