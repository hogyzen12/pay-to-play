import React from 'react';
import {
  Box,
  Drawer,
  Modal as SuccessModal,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { ReactComponent as CheckmarkImage } from 'assets/icons/checkmark.svg';
import { Button } from 'common/components';
import { staticContent } from 'common/static/content';
import { styles } from './ModalSuccess.styles';

const ModalSuccess = ({ openSuccessModal, handleCloseSuccessModal }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { title, description } = staticContent.pages.crossword.successModal;

  const modalContent = () => (
    <Box sx={matches ? styles.content : styles.contentMobile}>
      <IconButton sx={styles.closeIcon} onClick={handleCloseSuccessModal}>
        <CloseIcon sx={styles.icon} />
      </IconButton>
      <CheckmarkImage />
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.description} variant="body2">
        {description}
      </Typography>
      <Button
        sx={styles.button}
        onClick={handleCloseSuccessModal}
        title="Got it"
        customStyles={{
          maxWidth: { xs: '160px' },
        }}
      />
    </Box>
  );

  return (
    <>
      {matches ? (
        <SuccessModal open={openSuccessModal} onClose={handleCloseSuccessModal}>
          {modalContent()}
        </SuccessModal>
      ) : (
        <Drawer
          open={openSuccessModal}
          onClose={handleCloseSuccessModal}
          anchor="bottom"
        >
          {modalContent()}
        </Drawer>
      )}
    </>
  );
};

export default ModalSuccess;
