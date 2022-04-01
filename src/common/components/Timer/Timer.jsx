import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const styles = {
  timer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'custom.white',
  },
  button: {},
};

const Timer = () => {
  return (
    <Box sx={styles.timer}>
      <Typography sx={styles.time} variant="h3" color="">
        00 : 00
      </Typography>
      <Button sx={styles.button}></Button>
    </Box>
  );
};

export default Timer;
