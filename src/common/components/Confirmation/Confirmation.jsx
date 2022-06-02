import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styles } from './Confirmation.styles';
import staticContent from 'common/static/content.json';

const { title, description, agree } = staticContent.pages.articles.dialog;

const Confirmation = ({ open, setOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') return;

    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      fullScreen={fullScreen}
      onClose={handleClose}
      PaperProps={{
        style: {
          backgroundColor: '#404040',
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
          {agree}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirmation;
