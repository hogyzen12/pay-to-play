import React from 'react';
import { Box, Modal } from '@mui/material';

const ResultModal = ({ openModal, handleCloseModal }) => {
  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Box>ResultModal</Box>
    </Modal>
  );
};

export default ResultModal;
