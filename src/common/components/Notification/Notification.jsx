import React from 'react';
import { Snackbar, Alert, AlertTitle, Link, Typography } from '@mui/material';
import { initialAlertState } from 'common/static/constants';
import { styles } from './Notification.styles';

const Notification = ({ alertState, setAlertState }) => {
  const onAlertClose = () => setAlertState(initialAlertState);

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={alertState.open}
      onClose={onAlertClose}
      autoHideDuration={alertState.duration || 5000}
    >
      <Alert
        variant="filled"
        sx={styles.alert}
        onClose={onAlertClose}
        severity={alertState.severity}
      >
        {alertState?.tx ? (
          <>
            <AlertTitle sx={styles.title}>{alertState.message}</AlertTitle>
            <Typography sx={styles.message}>
              Check{' '}
              <Link sx={styles.link} href={alertState.tx} target="_blank">
                Transaction Details
              </Link>
            </Typography>
          </>
        ) : (
          alertState.message
        )}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
