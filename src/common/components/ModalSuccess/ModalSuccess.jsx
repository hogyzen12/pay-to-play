import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Link,
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
import { routes } from 'routes';
import { styles } from './ModalSuccess.styles';
import { txLink } from 'common/static/constants';
import staticContent from 'common/static/content.json';

const { title, description, button, link } =
  staticContent.pages.crossword.successModal;

const ModalSuccess = ({
  openSuccessModal,
  toggleSuccessModal,
  transactionSignature,
}) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const TXID = `${txLink}/${transactionSignature}`;

  const handleClose = () => {
    toggleSuccessModal();
    navigate(routes.home);
  };

  const modalContent = () => (
    <Box sx={matches ? styles.content : styles.contentMobile}>
      <IconButton sx={styles.closeIcon} onClick={handleClose}>
        <CloseIcon sx={styles.icon} />
      </IconButton>
      <CheckmarkImage />
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.description} variant="body2">
        {description}{' '}
        <Link sx={styles.link} href={TXID} target="_blank">
          {link}
        </Link>
      </Typography>

      <Button
        sx={styles.button}
        onClick={handleClose}
        title={button}
        customStyles={{
          maxWidth: { xs: '160px' },
        }}
      />
    </Box>
  );

  return (
    <>
      {matches ? (
        <AnimatePresence>
          <SuccessModal
            open={openSuccessModal}
            onClose={handleClose}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {modalContent()}
          </SuccessModal>
        </AnimatePresence>
      ) : (
        <Drawer open={openSuccessModal} onClose={handleClose} anchor="bottom">
          {modalContent()}
        </Drawer>
      )}
    </>
  );
};

export default ModalSuccess;
