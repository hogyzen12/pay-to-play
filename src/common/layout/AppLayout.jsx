import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Loader, Notification, Modal } from '../components';
import { routes } from '../../routes';
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
  providerPubKey,
  loginHandler,
  loading,
  openModal,
  alertState,
  onAlertClose,
  resetResult,
  submitResult,
  handleCloseModal,
}) => {
  const [showBasement, setShowBasement] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowBasement(location.pathname === routes.crossword);
    setShowBar(
      location.pathname === routes.home ||
        location.pathname === routes.crossword,
    );
  }, [location]);

  return (
    <>
      <Box sx={styles.layout}>
        {showBar && (
          <AppBar providerPubKey={providerPubKey} loginHandler={loginHandler} />
        )}
        <AppWrapper>
          <Outlet />
        </AppWrapper>
        {showBasement && (
          <AppBasement resetResult={resetResult} submitResult={submitResult} />
        )}
      </Box>

      <Loader isLoading={loading} />
      <Modal openModal={openModal} handleCloseModal={handleCloseModal} />
      <Notification alertState={alertState} onAlertClose={onAlertClose} />
    </>
  );
};

export default AppLayout;
