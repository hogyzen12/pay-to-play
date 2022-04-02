import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styles } from './Button.styles';

const Button = ({ title = 'Submit', onClick }) => {
  const handleClick = () => onClick();

  return (
    <MuiButton
      sx={styles.submit}
      onClick={handleClick}
      color="secondary"
      variant="contained"
    >
      {title}
    </MuiButton>
  );
};

export default Button;
