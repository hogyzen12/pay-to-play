import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Alert, AlertTitle, Link, Typography } from '@mui/material';
import { notificationClosed } from 'redux/notification/notificationSlice';
import { styles } from './Notification.styles';

const Notification = () => {
  const dispatch = useDispatch();
  const { open, message, severity, tx } = useSelector(
    state => state.notification,
  );

  const onAlertClose = () => {
    dispatch(notificationClosed());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      onClose={onAlertClose}
      autoHideDuration={5000}
    >
      <Alert
        variant="filled"
        sx={styles.alert}
        onClose={onAlertClose}
        severity={severity}
      >
        {tx ? (
          <>
            <AlertTitle sx={styles.title}>{message}</AlertTitle>
            <Typography sx={styles.message}>
              Check{' '}
              <Link sx={styles.link} href={tx} target="_blank">
                Transaction Details
              </Link>
            </Typography>
          </>
        ) : (
          message
        )}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
