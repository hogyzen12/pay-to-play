import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styles } from './PaymentSelect.styles';

import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow.svg';

const SOLamount = '0.1';
const DHMTamount = '1';

const PaymentSelect = ({ handleClickSOL, handleClickDHMT }) => {
  return (
    <Box sx={styles.select} component="section">
      <Typography sx={styles.title} variant="h3">
        select Payment to start game:
      </Typography>
      <Box sx={styles.buttons}>
        <Button sx={styles.button} onClick={handleClickSOL}>
          <Typography sx={styles.buttonText} variant="h3">
            {SOLamount} SOL
          </Typography>
          <ArrowForward />
        </Button>
        <Button sx={styles.button} onClick={handleClickDHMT}>
          <Typography sx={styles.buttonText} variant="h3">
            {DHMTamount} DHMT
          </Typography>
          <ArrowForward />
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentSelect;
