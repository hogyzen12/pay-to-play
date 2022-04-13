import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  Loader,
  Notification,
  ModalSubmit,
  ModalSuccess,
} from 'common/components';
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
  providerPubKey,
  loginHandler,
  loading,
  openSubmitModal,
  openSuccessModal,
  alertState,
  onAlertClose,
  resetResult,
  submitResult,
  handleOpenSubmitModal,
  handleOpenSuccessModal,
  handleCloseSubmitModal,
  handleCloseSuccessModal,
}) => {
  const [open, setOpen] = useState(false);
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

  const toggleDrawer = () => {
    console.log('click');
    setOpen(!open);
  };

  return (
    <>
      <Box sx={styles.layout}>
        {showBar && (
          <AppBar
            providerPubKey={providerPubKey}
            loginHandler={loginHandler}
            toggleDrawer={toggleDrawer}
          />
        )}
        <AppWrapper>
          <Outlet />
        </AppWrapper>
        {showBasement && (
          <AppBasement
            open={open}
            resetResult={resetResult}
            submitResult={submitResult}
            toggleDrawer={toggleDrawer}
          />
        )}
      </Box>

      <Loader isLoading={loading} />
      <Notification alertState={alertState} onAlertClose={onAlertClose} />
      <ModalSubmit
        openSubmitModal={openSubmitModal}
        handleCloseSubmitModal={handleCloseSubmitModal}
        handleOpenSubmitModal={handleOpenSubmitModal}
        handleOpenSuccessModal={handleOpenSuccessModal}
      />
      <ModalSuccess
        openSuccessModal={openSuccessModal}
        handleCloseSuccessModal={handleCloseSuccessModal}
      />
    </>
  );
};

export default AppLayout;
