import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  CrosswordProvider,
  CrosswordGrid,
  DirectionClues,
} from '@jaredreisinger/react-crossword';
import { styles } from './Game.styles';
import staticContent from 'common/static/content.json';
import data from 'common/static/crossword.json';

const { hints } = staticContent.pages.crossword;

const theme = {
  textColor: '909090',
  gridBackground: '#404040',
  cellBackground: '#FFF',
  cellBorder: '#404040',
  numberColor: '#141414',
  focusBackground: '#CDCCF5',
  highlightBackground: '#CDCCF5', // #EEEEFC
};

const Game = ({ gameRef, gameReseted, setGameReseted }) => {
  const crosswordRef = useRef();

  useEffect(() => {
    const crossRef = crosswordRef.current;

    if (crossRef && gameReseted) {
      crossRef.reset();
      setGameReseted(false);
    }
  }, [gameReseted, setGameReseted]);

  return (
    <Box sx={styles.game}>
      <CrosswordProvider
        data={data}
        theme={theme}
        ref={crosswordRef}
        onCellChange={(row, col, char) => console.log(row, col, char)}
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
