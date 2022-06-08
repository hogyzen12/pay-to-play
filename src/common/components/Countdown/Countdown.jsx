import React from 'react';
import { Paper, Box } from '@mui/material';
import { styles } from './Countdown.styles';

const Countdown = ({ days, hours, minutes, seconds }) => (
  <Box sx={styles.root}>
    <Paper sx={styles.paper} elevation={0}>
      <Box sx={styles.item} component="span">
        {days < 10 ? `0${days}` : days}
      </Box>
      <Box component="span">days</Box>
    </Paper>
    <Paper sx={styles.paper} elevation={0}>
      <Box sx={styles.item} component="span">
        {hours < 10 ? `0${hours}` : hours}
      </Box>
      <Box component="span">hrs</Box>
    </Paper>
    <Paper sx={styles.paper} elevation={0}>
      <Box sx={styles.item} component="span">
        {minutes < 10 ? `0${minutes}` : minutes}
      </Box>
      <Box component="span">mins</Box>
    </Paper>
    <Paper sx={styles.paper} elevation={0}>
      <Box sx={styles.item} component="span">
        {seconds < 10 ? `0${seconds}` : seconds}
      </Box>
      <Box component="span">secs</Box>
    </Paper>
  </Box>
);

export default Countdown;
