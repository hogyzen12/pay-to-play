import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
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

const ArticlesLayout = ({
  seconds,
  minutes,
  providerPubKey,
  provider,
  setProvider,
}) => (
  <Box sx={styles.layout}>
    <AppBar
      seconds={seconds}
      minutes={minutes}
      provider={provider}
      setProvider={setProvider}
      providerPubKey={providerPubKey}
    />

    <AppWrapper>
      <Outlet />
    </AppWrapper>
  </Box>
);

export default ArticlesLayout;
