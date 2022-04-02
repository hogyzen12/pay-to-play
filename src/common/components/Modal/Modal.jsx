import React from 'react';
import { Box, Typography, Link, Modal as SubmitModal } from '@mui/material';
import { Button, Answer } from '../../components';
import { ReactComponent as AcrossIcon } from '../../../assets/icons/across.svg';
import { ReactComponent as DownIcon } from '../../../assets/icons/down.svg';
import { styles } from './Modal.styles';

const Modal = ({ openModal, handleCloseModal }) => {
  const handleSubmit = () => handleCloseModal();

  return (
    <SubmitModal open={openModal} onClose={handleCloseModal}>
      <Box sx={styles.modal}>
        <Box sx={styles.heading} component="header">
          <Typography sx={styles.title}>Submit your answers</Typography>
          <Box sx={styles.statsWrapper}>
            <Box sx={styles.stats}>
              <Typography sx={styles.statsTitle} variant="h3">
                time:
              </Typography>
              <Typography sx={styles.statsResult} variant="h3">
                07:23
              </Typography>
            </Box>
            <Box sx={styles.stats}>
              <Typography sx={styles.statsTitle} variant="h3">
                words guessed:
              </Typography>
              <Typography sx={styles.statsResult} variant="h3">
                16/19
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={styles.content} component="section">
          <Box sx={styles.axis}>
            <Box sx={styles.axisHeading}>
              <Typography sx={styles.axisTitle} variant="h3">
                Across
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
                Down
              </Typography>
              <DownIcon />
            </Box>
            <Box sx={styles.answersList} component="ul">
              <Answer number="2" question="Dui adipiscing vitae dui" />
            </Box>
          </Box>
        </Box>

        <Box sx={styles.footer} component="footer">
          <Link sx={styles.link} href="#">
            Something isnt right?
          </Link>
          <Button onClick={handleSubmit} />
        </Box>
      </Box>
    </SubmitModal>
  );
};

export default Modal;
