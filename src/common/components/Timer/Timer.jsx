import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { Box, Typography } from '@mui/material';

import { styles } from './Timer.styles';

const expiryTimestamp = new Date();
expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300);

const Timer = () => {
  const { seconds, minutes, isRunning, start, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetTimer = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300); // Restarts to 5 minutes timer
    restart(time);
  };

  // const handleClick = () => console.log('click');

  return (
    <Box sx={styles.timer}>
      <Typography sx={styles.time} variant="h3">
        {minutes} : {seconds}
      </Typography>
    </Box>
  );
};

export default Timer;
