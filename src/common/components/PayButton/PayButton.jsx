import React from 'react';
import { Button, Typography } from '@mui/material';
import { ReactComponent as ArrowForward } from 'assets/icons/arrow.svg';
import { styles } from './PayButton.styles';

const PayButton = ({
  title,
  currency,
  amount,
  handlePay,
  selectedPage,
  customStyles = {},
}) => {
  const handleClick = () => {
    if (handlePay) handlePay(selectedPage, currency);
  };

  return (
    <Button
      sx={Object.assign({}, styles.button, customStyles)}
      onClick={handleClick}
    >
      <Typography sx={styles.buttonText} variant="h3">
        {title ? title : `${amount} ${currency}`}
      </Typography>
      <ArrowForward />
    </Button>
  );
};

export default PayButton;
