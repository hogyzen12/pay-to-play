import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';

import AppContainer from '../common/layout/AppContainer';
import { Card, Tutorial, PaymentSelect } from '../common/components';

const Home = ({ handleClickSOL, handleClickDHMT }) => {
  return (
    <>
      <Helmet>
        <title>Diamond Game</title>
        <meta name="description" content="Diamond Hands Game" />
      </Helmet>

      <AppContainer>
        <Box sx={{ margin: '0 auto', maxWidth: { md: '640px' } }}>
          <Card />
          <Tutorial />
          <PaymentSelect
            handleClickSOL={handleClickSOL}
            handleClickDHMT={handleClickDHMT}
          />
        </Box>
      </AppContainer>
    </>
  );
};

export default Home;
