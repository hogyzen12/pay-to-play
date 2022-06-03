import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from './AppBar';
import AppWrapper from './AppWrapper';

const styles = {
  layout: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    height: '100vh',
    width: '100%',
    gridTemplateAreas: `
			"AppBar"
			"AppWrapper"
		`,
  },
};

const ArticlesLayout = () => (
  <Box sx={styles.layout}>
    <AppBar />
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  </Box>
);

export default ArticlesLayout;
