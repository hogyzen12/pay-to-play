import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { Card, Tutorial, PaymentSelect } from 'common/components';
import { staticContent } from 'common/static/content';
import AppContainer from 'common/layout/AppContainer';

const styles = {
  wrapper: { margin: '0 auto', maxWidth: { md: '640px' } },
};

const Home = ({ handleClickSOL, handleClickDHMT }) => {
  const { title, description } = staticContent.meta.home;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer>
        <Box sx={styles.wrapper}>
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
