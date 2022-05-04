import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styles } from './Button.styles';

const Button = ({ onClick, disabled, title = 'Submit', customStyles = {} }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <MuiButton
      sx={{ ...styles.button, ...customStyles }}
      onClick={handleClick}
      disabled={disabled}
      color="secondary"
      variant="contained"
    >
      {title}
    </MuiButton>
  );
};

export default Button;
