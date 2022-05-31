import React, { useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  CrosswordProvider,
  CrosswordGrid,
  DirectionClues,
} from '@jaredreisinger/react-crossword';
import staticContent from 'common/static/content.json';
import data from 'common/static/crossword.json';
import { theme } from 'common/theme/themeCrossword';
import { styles } from './Game.styles';

const { hints } = staticContent.pages.crossword;

const Game = ({ gameRef, gameReseted, setGameReseted }) => {
  const crosswordRef = useRef();

  useEffect(() => {
    return () => {
      localStorage.removeItem('guesses');
      localStorage.removeItem('results');
    };
  }, []);

  useEffect(() => {
    const crossRef = crosswordRef.current;

    if (crossRef && gameReseted) {
      crossRef.reset();
      setGameReseted(false);
    }
  }, [gameReseted, setGameReseted]);

  return (
    <Box sx={styles.game}>
      <CrosswordProvider data={data} theme={theme} ref={crosswordRef}>
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
