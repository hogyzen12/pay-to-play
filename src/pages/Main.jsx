import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { staticContent } from 'common/static/content';
import AppContainer from 'common/layout/AppContainer';
import { routes } from 'routes';

const styles = {
  wrapper: { margin: '0 auto', maxWidth: { md: '640px' } },
  choice: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexDirection: { xs: 'column', md: 'row' },
  },
  title: {
    // marginTop: '32px',
    marginBottom: '42px',
  },
};

const Main = ({ handleClickSOL, handleClickDHMT }) => {
  const { title, description } = staticContent.meta.home;
  const { pageTitle } = staticContent.pages.main;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer customStyles={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={styles.wrapper}>
          <Typography sx={styles.title} variant="h2" component="h2">
            {pageTitle}
          </Typography>

          <Box sx={styles.choice}>
            <ChoiceCard
              title="Articles Page"
              image=""
              selectedPage={routes.articles}
              handleClickSOL={handleClickSOL}
              handleClickDHMT={handleClickDHMT}
            />
            <ChoiceCard
              title="Discount Page"
              image=""
              selectedPage={routes.discount}
              handleClickSOL={handleClickSOL}
              handleClickDHMT={handleClickDHMT}
            />
          </Box>
        </Box>
      </AppContainer>
    </>
  );
};

export default Main;
