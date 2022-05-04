import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { styles } from './Loader.styles';

const Loader = ({ isLoading = false }) => {
  return (
    <Backdrop sx={styles.backdrop} open={isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
