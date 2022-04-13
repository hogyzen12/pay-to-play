import React from 'react';
import {
  Box,
  Typography,
  Link,
  Modal as SubmitModal,
  // SwipeableDrawer,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Button, Answer, Tabs } from 'common/components';
import { ReactComponent as AcrossIcon } from 'assets/icons/across.svg';
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { staticContent } from 'common/static/content';
import { styles } from './ModalSubmit.styles';

const ModalSubmit = ({
  openSubmitModal,
  handleCloseSubmitModal,
  handleOpenSubmitModal,
  handleOpenSuccessModal,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { time, guessed, title, across, button, down, something } =
    staticContent.pages.crossword.submitModal;

  const handleSubmit = () => {
    handleCloseSubmitModal();
    handleOpenSuccessModal();
  };

  const modalContent = () => (
    <Box sx={matches ? styles.modal : styles.drawer}>
      <Box sx={styles.heading} component="header">
        <Typography sx={styles.title}>{title}</Typography>
        <Box sx={styles.statsWrapper}>
          <Box sx={styles.stats}>
            <Typography sx={styles.statsTitle} variant="h3">
              {time}
            </Typography>
            <Typography sx={styles.statsResult} variant="h3">
              07:23
            </Typography>
          </Box>
          <Box sx={styles.stats}>
            <Typography sx={styles.statsTitle} variant="h3">
              {guessed}
            </Typography>
            <Typography sx={styles.statsResult} variant="h3">
              16/19
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={styles.content} component="section">
        {matches ? (
          <>
            <Box sx={styles.axis}>
              <Box sx={styles.axisHeading}>
                <Typography sx={styles.axisTitle} variant="h3">
                  {across}
                </Typography>
                <AcrossIcon />
              </Box>
              <Box sx={styles.answersList} component="ul">
                <Answer number="1" question="Dui adipiscing vitae dui" />
              </Box>
            </Box>
            <Box sx={styles.axis}>
              <Box sx={styles.axisHeading}>
                <Typography sx={styles.axisTitle} variant="h3">
                  {down}
                </Typography>
                <DownIcon />
              </Box>
              <Box sx={styles.answersList} component="ul">
                <Answer number="2" question="Dui adipiscing vitae dui" />
              </Box>
            </Box>
          </>
        ) : (
          <Tabs />
        )}
      </Box>

      <Box sx={styles.footer} component="footer">
        <Link sx={styles.link} href="#">
          {something}
        </Link>
        <Button title={button} onClick={handleSubmit} />
      </Box>
    </Box>
  );

  return (
    <>
      {matches ? (
        <SubmitModal open={openSubmitModal} onClose={handleCloseSubmitModal}>
          {modalContent()}
        </SubmitModal>
      ) : (
        <Drawer
          anchor="bottom"
          open={openSubmitModal}
          // onOpen={handleOpenSubmitModal}
          onClose={handleCloseSubmitModal}
        >
          {modalContent()}
        </Drawer>
      )}
    </>
  );
};

export default ModalSubmit;
