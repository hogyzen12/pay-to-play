import React from 'react';
import { Box, Typography, Backdrop, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { styles } from './NoBalance.styles';

const NoBalance = ({ onClose }) => (
  <Backdrop open={true} onClick={onClose}>
    <Box sx={styles.wrapper}>
      <IconButton sx={styles.closeBtn} onClick={onClose}>
        <CloseIcon sx={styles.closeIcon} />
      </IconButton>
      <Typography sx={styles.title} variant="h3">
        You do need more SOL for gas fees
      </Typography>
      <Typography sx={styles.description}>
        You need to have at least 1 DMND to play the game.
      </Typography>
    </Box>
  </Backdrop>
);

export default NoBalance;
