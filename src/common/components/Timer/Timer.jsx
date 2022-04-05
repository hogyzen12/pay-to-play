import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
// import {
//   PlayArrow as PlayArrowIcon,
//   Pause as PauseIcon,
// } from '@mui/icons-material';
import { styles } from './Timer.styles';

const Timer = ({ type = 'play' }) => {
  // const handleClick = () => console.log('click');

  return (
    <Box sx={styles.timer}>
      <Typography sx={styles.time} variant="h3" color="">
        00 : 00
      </Typography>
      {/* <IconButton sx={styles.button} onClick={handleClick}>
        {type === 'pause' ? (
          <PauseIcon sx={styles.icon} />
        ) : (
          <PlayArrowIcon sx={styles.icon} />
        )}
      </IconButton> */}
    </Box>
  );
};

export default Timer;
