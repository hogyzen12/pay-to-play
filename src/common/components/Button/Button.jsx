import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styles } from './Button.styles';

const Button = ({ onClick, title = 'Submit', customStyles = {} }) => {
  const handleClick = () => onClick();

  return (
    <MuiButton
      sx={{ ...styles.button, ...customStyles }}
      onClick={handleClick}
      color="secondary"
      variant="contained"
    >
      {title}
    </MuiButton>
  );
};

export default Button;
