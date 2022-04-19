import React from 'react';
import { Helmet } from 'react-helmet-async';
// import { Box } from '@mui/material';
import { Game, Hints } from 'common/components';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';

// const styles = {
//   wrapper: {
//     display: 'flex',
//     flexDirection: { xs: 'column', md: 'row' },
//     gap: '24px',
//   },
// };

const Crossword = ({ gameRef }) => {
  const { title, description } = staticContent.meta.crossword;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer>
        <Game gameRef={gameRef} />
      </AppContainer>
    </>
  );
};

export default Crossword;
