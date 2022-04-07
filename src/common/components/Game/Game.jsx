import React, { useRef } from 'react';
import {
  CrosswordProvider,
  CrosswordGrid,
  DirectionClues,
} from '@jaredreisinger/react-crossword';
import { Box } from '@mui/material';
import { styles } from './Game.styles';
// import { data } from 'common/static/crossword';
import data from 'common/static/crossword.json';

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
  const gameRef = useRef();

  console.log('gameRef', gameRef);

  return (
    <Box sx={styles.game}>
      <CrosswordProvider
        theme={theme}
        data={data}
        ref={gameRef}
        onLoadedCorrect={e => console.log(e)}
        onCrosswordComplete={e => console.log(e)} // fires when all the answers are correct
        onAnswerCorrect={(e, v) => console.log(e, v)} // gets fired when the answer is correct
        // onCellChange={e => console.log(e)} //
        onCorrect={(direction, number, answer) =>
          console.log(direction, number, answer)
        }
        // useStorage={false}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            padding: '8px',
            bgcolor: '#404040',
            borderRadius: '8px',
          }}
        >
          <CrosswordGrid />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' }, display: 'flex' }}>
          <DirectionClues style={{ bgcolor: 'red' }} direction="across" />
          <DirectionClues direction="down" />
        </Box>
      </CrosswordProvider>
    </Box>
  );
};

export default Game;
