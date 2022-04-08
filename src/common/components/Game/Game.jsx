import React, { useRef } from 'react';
import {
  CrosswordProvider,
  CrosswordGrid,
  DirectionClues,
} from '@jaredreisinger/react-crossword';
import { Box, Typography } from '@mui/material';
import { staticContent } from 'common/static/content';
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

const Game = ({ gameRef }) => {
  const { hints } = staticContent.pages.crossword;

  return (
    <Box sx={styles.game}>
      <CrosswordProvider
        theme={theme}
        data={data}
        // useStorage={false}
        onLoadedCorrect={e => console.log(e)}
        onCrosswordComplete={e => console.log(e)} // fires when all the answers are correct
        onAnswerCorrect={(e, v) => console.log(e, v)} // gets fired when the answer is correct
        // onCellChange={e => console.log(e)} //
        onCorrect={(direction, number, answer) =>
          console.log(direction, number, answer)
        }
      >
        <Box sx={styles.grid} ref={gameRef}>
          <CrosswordGrid />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography sx={styles.title} variant="h3">
            {hints}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
            }}
          >
            <DirectionClues style={{ bgcolor: 'red' }} direction="across" />
            <DirectionClues direction="down" />
          </Box>
        </Box>
      </CrosswordProvider>
    </Box>
  );
};

export default Game;
