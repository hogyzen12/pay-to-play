import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Link,
  Modal as SubmitModal,
  Drawer,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Button, Answer, Tabs } from 'common/components';
import { ReactComponent as AcrossIcon } from 'assets/icons/across.svg';
import { initialResults } from 'common/static/results';
import { styles } from './ModalSubmit.styles';
import { totalQuestions } from 'common/static/constants';
import staticContent from 'common/static/content.json';

const { time, guessed, title, across, button, down, something } =
  staticContent.pages.crossword.submitModal;

const ModalSubmit = ({
  timeDuration,
  openSubmitModal,
  toggleSubmitModal,
  submitResults,
}) => {
  const [totalGuesses, setTotalGuesses] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (openSubmitModal) {
      setTotalGuesses(0);
      getGuessesTotal('across');
      getGuessesTotal('down');
    }
  }, [openSubmitModal]);

  const handleSubmit = () => {
    submitResults();
  };

  const handleClose = () => {
    toggleSubmitModal();
  };

  const getGuessesTotal = axis => {
    initialResults[axis].map(guess => {
      if (guess.answer.length > 0) setTotalGuesses(prevState => prevState + 1);
    });
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
              {timeDuration}
            </Typography>
          </Box>
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
        <Link sx={styles.link} href="#">
          {something}
        </Link>
        <Button title={`${button} (1 DMND)`} onClick={handleSubmit} />
      </Box>
    </Box>
  );

  return (
    <>
      {matches ? (
        <SubmitModal open={openSubmitModal} onClose={handleClose}>
          {modalContent()}
        </SubmitModal>
      ) : (
        <Drawer anchor="bottom" open={openSubmitModal} onClose={handleClose}>
          {modalContent()}
        </Drawer>
      )}
    </>
  );
};

export default ModalSubmit;
