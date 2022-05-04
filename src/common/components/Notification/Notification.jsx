import React from 'react';
import { Snackbar, Alert } from '@mui/material';
import { initialAlertState } from 'common/static/constants';

const Notification = ({ alertState, setAlertState }) => {
  const onAlertClose = () => setAlertState(initialAlertState);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={alertState.open}
      onClose={onAlertClose}
      autoHideDuration={5000}
    >
      <Alert
        onClose={onAlertClose}
        severity={alertState.severity}
        variant="filled"
      >
        {alertState.message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
