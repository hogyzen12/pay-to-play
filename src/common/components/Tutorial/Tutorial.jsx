import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './Tutorial.styles';

const Tutorial = () => {
  return (
    <Box sx={styles.tutor}>
      <Typography sx={styles.title} variant="h3">
        How to play
      </Typography>
      <Typography sx={styles.description} variant="body1">
        Click/tap on the initial square of a word-space within the crossword
        grid. The word-space you select is highlighted, as is the corresponding
        clue. Use your keyboard or device keypad to type in the answer.
      </Typography>
      <Typography sx={styles.descriptionSecond} variant="body1">
        Click/tap on a square in the crossword grid to toggle the word direction
        from Across to Down (or vice versa). Click/tap on any clue in the Clue
        Panel to highlight the corresponding word-space in the grid.
      </Typography>
    </Box>
  );
};

export default Tutorial;
