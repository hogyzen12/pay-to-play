import React, { useState, useRef, useEffect } from 'react';
import {
  CrosswordProvider,
  CrosswordGrid,
  DirectionClues,
} from '@jaredreisinger/react-crossword';
import { Box, Typography } from '@mui/material';
import { localStorageGet } from 'common/utils/localStorage';
import staticContent from 'common/static/content.json';
import data from 'common/static/crossword.json';
import { styles } from './Game.styles';

const { hints } = staticContent.pages.crossword;
const theme = {
  textColor: '909090',
  gridBackground: '#404040',
  cellBackground: '#FFF',
  cellBorder: '#404040',
  numberColor: '#141414',
  focusBackground: '#CDCCF5',
  highlightBackground: '#EEEEFC',
};

const Game = ({ gameRef }) => {
  const crosswordRef = useRef();

  useEffect(() => {
    const crossRef = crosswordRef.current;
    console.log('crossRef', crossRef);
  }, [crosswordRef]);

  return (
    <Box sx={styles.game}>
      <CrosswordProvider
        data={data}
        theme={theme}
        ref={crosswordRef}
        onLoadedCorrect={loaded => {
          console.log('loaded', loaded);
        }}
        onCellChange={(row, col, char) => {
          console.log(row, col, char);
        }}
        onAnswerComplete={(direction, number, correct, answer) => {
          console.log('answer', direction, number, correct, answer);
        }}
      >
        <Box sx={styles.grid} ref={gameRef}>
          <CrosswordGrid />
        </Box>
        <Box sx={styles.hints}>
          <Typography sx={styles.title} variant="h3">
            {hints}
          </Typography>
          <Box sx={styles.clues}>
            <DirectionClues direction="across" />
            <DirectionClues direction="down" />
          </Box>
        </Box>
      </CrosswordProvider>
    </Box>
  );
};

export default Game;
