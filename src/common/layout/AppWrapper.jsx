import React from 'react';
import { Box } from '@mui/material';

const styles = {
  main: {
    gridArea: 'AppWrapper',
  },
};

const AppWrapper = ({ children }) => {
  return (
    <Box sx={styles.main} component="main">
      {children}
    </Box>
  );
};

export default AppWrapper;
