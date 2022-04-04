import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './Hints.styles';

const Hints = () => {
  return (
    <Box sx={styles.hints}>
      <Typography sx={styles.title} variant="h3">
        Hints
      </Typography>
    </Box>
  );
};

export default Hints;
