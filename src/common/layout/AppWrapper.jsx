import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const styles = {
  main: {
    gridArea: 'AppWrapper',
  },
};

const AppWrapper = () => {
  return (
    <Box sx={styles.main} component="main">
      <Outlet />
    </Box>
  );
};

export default AppWrapper;
