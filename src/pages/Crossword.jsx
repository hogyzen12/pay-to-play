import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { Game, Hints } from '../common/components';
import AppContainer from '../common/layout/AppContainer';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '24px',
  },
};

const Crossword = () => {
  return (
    <>
      <Helmet>
        <title>Diamond Crossword</title>
        <meta name="description" content="Diamond Hands Game" />
      </Helmet>

      <AppContainer>
        <Box sx={styles.wrapper}>
          <Game />
          <Hints />
        </Box>
      </AppContainer>
    </>
  );
};

export default Crossword;
