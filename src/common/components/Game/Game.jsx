import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import {
  CrosswordProvider,
  CrosswordGrid,
  DirectionClues,
} from '@jaredreisinger/react-crossword';
import { modalOpened } from 'redux/modal/modalSlice';
import { gameResetDisabled } from 'redux/game/gameSlice';
import staticContent from 'common/static/content.json';
import data from 'common/static/crossword.json';
import { theme } from 'common/theme/themeCrossword';
import { styles } from './Game.styles';
import { routes } from 'routes';

const { hints } = staticContent.pages.crossword;

const Game = () => {
  const dispatch = useDispatch();
  const crosswordRef = useRef();
  const { pathname } = useLocation();
  const { gameReset } = useSelector(state => state.game);

  useEffect(() => {
    if (pathname === `/${routes.crossword}`) {
      dispatch(modalOpened('confirm'));
    }
  }, [pathname, dispatch]);

  useEffect(() => {
    return () => {
      localStorage.removeItem('guesses');
      localStorage.removeItem('results');
    };
  }, []);

  useEffect(() => {
    const crossRef = crosswordRef.current;

    if (crossRef && gameReset) {
      crossRef.reset();
      dispatch(gameResetDisabled());
    }
  }, [dispatch, gameReset]);

  return (
    <Box sx={styles.game}>
      <CrosswordProvider
        data={data}
        theme={theme}
        ref={crosswordRef}
        onCellChange={(row, col, char) => console.log(row, col, char)}
        onAnswerComplete={(direction, number, correct, answer) => {
          console.log('answer', direction, number, correct, answer);
        }}
      >
        <Box sx={styles.grid}>
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
