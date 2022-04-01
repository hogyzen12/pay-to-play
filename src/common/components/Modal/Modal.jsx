import React from 'react';
import { Box, Modal as SubmitModal } from '@mui/material';
import { styles } from './Modal.styles';

const Modal = ({ openModal, handleCloseModal }) => {
  return (
    <SubmitModal open={openModal} onClose={handleCloseModal}>
      <Box sx={styles.modal}>Modal</Box>
    </SubmitModal>
  );
};

export default Modal;
