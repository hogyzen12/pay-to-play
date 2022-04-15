import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import { Box, Typography } from '@mui/material';
import { routes } from 'routes';
import { styles } from './Timer.styles';

const timeAmount = 3600; // one hour
const expiryTimestamp = new Date();
expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timeAmount);

const Timer = () => {
  const navigate = useNavigate();
  const { seconds, minutes, isRunning, start, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn('onExpire called');
      navigate(routes.home);
    },
  });

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeAmount);
    restart(time);
  };

  useEffect(() => {
    resetTimer();
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={styles.timer}>
      <Typography sx={styles.time} variant="h3">
        {minutes} : {seconds}
      </Typography>
    </Box>
  );
};

export default Timer;
