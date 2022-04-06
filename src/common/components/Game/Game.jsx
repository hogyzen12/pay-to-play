import React from 'react';
import Crossword from '@jaredreisinger/react-crossword';
import { Box } from '@mui/material';
import { styles } from './Game.styles';
import { data } from 'common/static/crossword';

const theme = {
  textColor: '909090',
  gridBackground: '#404040',
  cellBackground: '#FFF',
  cellBorder: '#404040',
  numberColor: '#141414',
  focusBackground: '#CDCCF5',
  highlightBackground: '#EEEEFC',
};

const Game = () => {
  return (
    <Box sx={styles.game}>
      <Crossword theme={theme} data={data} />
    </Box>
  );
};

export default Game;
