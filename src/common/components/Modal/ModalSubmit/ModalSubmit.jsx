import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Typography,
  Modal as SubmitModal,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { modalClosed } from 'redux/modal/modalSlice';
import { Button, Answer, Tabs } from 'common/components';
import { useModal } from 'common/hooks';
import { resultsToString } from 'common/utils/misc';
import { totalQuestions, DMND } from 'common/static/constants';
import { initialResults } from 'common/static/results';
import { ReactComponent as AcrossIcon } from 'assets/icons/across.svg';
import { styles } from './ModalSubmit.styles';
import staticContent from 'common/static/content.json';

const { guessed, title, across, button, down, something } =
  staticContent.pages.crossword.submitModal;

const ModalSubmit = ({ handlePay }) => {
  const [totalGuesses, setTotalGuesses] = useState(0);
  const { isModalOpen } = useModal();
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (isModalOpen) {
      setTotalGuesses(0);
      getGuessesTotal('across');
      getGuessesTotal('down');
    }
  }, [isModalOpen]);

  const getGuessesTotal = axis => {
    initialResults[axis].map(guess => {
      if (guess.answer.length > 0) {
        setTotalGuesses(prevState => prevState + 1);
      }
    });
  };

  const handleClose = () => {
    dispatch(modalClosed());
  };

  const handlePayToSubmit = async () => {
    const totalResultsString = resultsToString();

    handleClose();
    handlePay(null, DMND, totalResultsString, null, null, true);
  };

  const modalContent = () => (
    <Box sx={matches ? styles.modal : styles.drawer}>
      <Box sx={styles.heading} component="header">
        <Typography sx={styles.title}>{title}</Typography>
        <Box sx={styles.statsWrapper}>
          <Box sx={styles.stats}>
            <Typography sx={styles.statsTitle} variant="h3">
              {guessed}
            </Typography>
            <Typography sx={styles.statsResult} variant="h3">
              {totalGuesses}/{totalQuestions}
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
                {initialResults.across.map((result, index) => (
                  <Answer
                    key={index}
                    number={result.number}
                    question={result.clue}
                    answer={result.answer}
                  />
                ))}
              </Box>
            </Box>
            <Box sx={styles.axis}>
              <Box sx={styles.axisHeading}>
                <Typography sx={styles.axisTitle} variant="h3">
                  {down}
                </Typography>
                <AcrossIcon style={{ transform: 'rotate(90deg)' }} />
              </Box>
              <Box sx={styles.answersList} component="ul">
                {initialResults.down.map(result => (
                  <Answer
                    key={result.number}
                    number={result.number}
                    question={result.clue}
                    answer={result.answer}
                  />
                ))}
              </Box>
            </Box>
          </>
        ) : (
          <Tabs initialResults={initialResults} />
        )}
      </Box>

      <Box sx={styles.footer} component="footer">
        <Typography sx={{ mt: { xs: '20px', md: 0 } }}>{something}</Typography>
        <Button title={`${button} (1 DMND)`} onClick={handlePayToSubmit} />
      </Box>
    </Box>
  );

  return (
    <>
      {matches ? (
        <SubmitModal open={isModalOpen} onClose={handleClose}>
          {modalContent()}
        </SubmitModal>
      ) : (
        <Drawer
          PaperProps={{
            sx: {
              top: '60px',
            },
          }}
          anchor="bottom"
          open={isModalOpen}
          onClose={handleClose}
        >
          {modalContent()}
        </Drawer>
      )}
    </>
  );
};

export default ModalSubmit;
