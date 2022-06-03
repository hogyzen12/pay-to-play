import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  useMediaQuery,
  Typography,
} from '@mui/material';
import { modalClosed } from 'redux/modal/modalSlice';
import { useModal } from 'common/hooks';
import { useTheme } from '@mui/material/styles';
import { styles } from './ModalConfirmation.styles';
import staticContent from 'common/static/content.json';

const { title, description, agree } = staticContent.pages.articles.dialog;

const ModalConfirmation = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { isModalOpen, modalType } = useModal();

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;

    dispatch(modalClosed());
  };

  return (
    <Dialog
      open={isModalOpen && modalType === 'confirm'}
      fullScreen={fullScreen}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: '#1D1D1D',
          width: '100%',
        },
      }}
    >
      <DialogTitle sx={styles.title}>{title}</DialogTitle>

      <DialogContent sx={styles.content}>
        <DialogContentText sx={styles.description}>
          {description}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={styles.actions}>
        <Button sx={styles.btn} onClick={handleClose}>
          <Typography sx={styles.btnText} variant="h3">
            {agree}
          </Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalConfirmation;
