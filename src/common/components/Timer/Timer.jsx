import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { Box, Typography } from '@mui/material';
import { routes } from 'routes';
import { styles } from './Timer.styles';

const expiryTimestamp = new Date();
expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 500);

const Timer = () => {
  const navigate = useNavigate();
  const { seconds, minutes, isRunning, start, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn('onExpire called');
      navigate(routes.home);
    },
  });

  useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 100); // Restarts to 5 minutes timer
    restart(time);
  };

  return (
    <Box sx={styles.timer}>
      <Typography sx={styles.time} variant="h3">
        {minutes} : {seconds}
      </Typography>
    </Box>
  );
};

export default Timer;
