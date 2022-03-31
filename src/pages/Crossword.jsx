import React from 'react';
import { Helmet } from 'react-helmet-async';
import AppContainer from '../common/layout/AppContainer';

const Crossword = () => {
  return (
    <>
      <Helmet>
        <title>Diamond Game</title>
        <meta name="description" content="Diamond Hands Game" />
      </Helmet>

      <AppContainer>Crossword</AppContainer>
    </>
  );
};

export default Crossword;
