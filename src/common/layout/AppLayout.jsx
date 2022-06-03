import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppBar from './AppBar';
import AppWrapper from './AppWrapper';
import AppBasement from './AppBasement';
import { routes } from 'routes';

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

const AppLayout = () => {
  const [open, setOpen] = useState(false);
  const [showBasement, setShowBasement] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowBasement(location.pathname === `/${routes.crossword}`);
  }, [location]);

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={styles.layout}>
      <AppBar toggleDrawer={toggleDrawer} />

      <AppWrapper>
        <Outlet />
      </AppWrapper>

      {showBasement && <AppBasement open={open} toggleDrawer={toggleDrawer} />}
    </Box>
  );
};

export default AppLayout;
