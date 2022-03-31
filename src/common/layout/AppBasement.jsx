import React from 'react';
import { Box, Typography } from '@mui/material';
import AppContainer from './AppContainer';

const styles = {
  footer: {
    gridArea: 'AppBasement',
    borderTop: '1px solid #404040',
  },
};

const AppBasement = () => {
  return (
    <Box sx={styles.footer} component="footer">
      <AppContainer>
        <Typography>select payment to start game:</Typography>
      </AppContainer>
    </Box>
  );
};

export default AppBasement;
