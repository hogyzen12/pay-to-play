import React from 'react';
import { Button, Typography } from '@mui/material';
import { ReactComponent as ArrowForward } from 'assets/icons/arrow.svg';
import { styles } from './PayButton.styles';

const PayButton = ({ currency, amount, handlePay, selectedPage }) => {
  const handleClick = () => {
    if (handlePay) handlePay(selectedPage);
  };

  return (
    <Button sx={styles.button} onClick={handleClick}>
      <Typography sx={styles.buttonText} variant="h3">
        {amount} {currency}
      </Typography>
      <ArrowForward />
    </Button>
  );
};

export default PayButton;
