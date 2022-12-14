import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { routes } from 'routes';
import AppBar from './AppBar';
import AppWrapper from './AppWrapper';
import AppBasement from './AppBasement';

const styles = {
  layout: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    height: '100vh',
    width: '100%',
    gridTemplateAreas: `
			"AppBar"
			"AppWrapper"
			"AppBasement"
		`,
  },
};

const AppLayout = ({
  seconds,
  minutes,
  resetTimer,
  providerPubKey,
  generateResults,
  provider,
  setProvider,
}) => {
  const [open, setOpen] = useState(false);
  const [showBasement, setShowBasement] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowBasement(location.pathname === routes.crossword);
  }, [location]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={styles.layout}>
      <AppBar
        seconds={seconds}
        minutes={minutes}
        provider={provider}
        setProvider={setProvider}
        toggleDrawer={toggleDrawer}
        providerPubKey={providerPubKey}
      />

      <AppWrapper>
        <Outlet />
      </AppWrapper>

      {showBasement && (
        <AppBasement
          open={open}
          resetTimer={resetTimer}
          toggleDrawer={toggleDrawer}
          providerPubKey={providerPubKey}
          generateResults={generateResults}
        />
      )}
    </Box>
  );
};

export default AppLayout;
