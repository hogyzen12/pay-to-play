import React from 'react';
import { Box, Typography, Backdrop, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const NoBalance = ({ onClose }) => (
  <Backdrop open={true} onClick={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: { xs: '90%', md: '600px' },
        width: '100%',
        bgcolor: '#1D1D1D',
        padding: '16px 16px 32px',
        borderRadius: '8px',
      }}
    >
      <IconButton
        sx={{
          display: 'block',
          padding: '0',
          margin: '0',
          marginLeft: 'auto',
          marginBottom: '20px',
        }}
        onClick={onClose}
      >
        <CloseIcon sx={{ color: '#A2A2A2' }} />
      </IconButton>
      <Typography
        sx={{
          mb: '16px',
          fontSize: '32px',
          textAlign: 'center',
        }}
        variant="h3"
      >
        You do need more SOL for gas fees
      </Typography>
      <Typography sx={{ textAlign: 'center' }}>
        You need to have at least 1 DMND to play the game.
      </Typography>
    </Box>
  </Backdrop>
);

export default NoBalance;
