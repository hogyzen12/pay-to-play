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
import { ReactComponent as DownIcon } from 'assets/icons/down.svg';
import { initialResults } from 'common/static/results';
import staticContent from 'common/static/content.json';
import { styles } from './ModalSubmit.styles';

const totalQuestions = 30;
const { time, guessed, title, across, button, down, something } =
  staticContent.pages.crossword.submitModal;

const ModalSubmit = ({
  timeDuration,
  // initialResults,
  openSubmitModal,
  toggleSubmitModal,
  toggleSuccessModal,
}) => {
  const [totalGuesses, setTotalGuesses] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (openSubmitModal) getGuessesTotal();
  }, [openSubmitModal]);

  const handleSubmit = () => {
    toggleSubmitModal();
    toggleSuccessModal();
  };

  const getGuessesTotal = () => {
    console.log('initialResults :>> ', initialResults);
    initialResults.across.map(guess => {
      if (guess.answer.length > 0) {
        console.log('across :>> ', guess);
        setTotalGuesses(prevState => prevState + 1);
      }
    });

    initialResults.down.map(guess => {
      if (guess.answer.length > 0) {
        console.log('down :>> ', guess);
        setTotalGuesses(prevState => prevState + 1);
      }
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
                <DownIcon />
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
        <Button title={button} onClick={handleSubmit} />
      </Box>
    </Box>
  );

  return (
    <>
      {matches ? (
        <SubmitModal open={openSubmitModal} onClose={toggleSubmitModal}>
          {modalContent()}
        </SubmitModal>
      ) : (
        <Drawer
          anchor="bottom"
          open={openSubmitModal}
          onClose={toggleSubmitModal}
        >
          {modalContent()}
        </Drawer>
      )}
    </>
  );
};

export default ModalSubmit;
