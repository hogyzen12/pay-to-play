import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const NotificationPopup = ({ alertState, onAlertClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={alertState.open}
    autoHideDuration={6000}
    onClose={onAlertClose}
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

export default NotificationPopup;
