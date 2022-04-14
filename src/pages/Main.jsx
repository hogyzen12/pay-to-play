import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { staticContent } from 'common/static/content';
import { cards } from 'common/static/cards';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.home;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    display: 'flex',
    gap: '16px',
    flexDirection: { xs: 'column', md: 'row' },
  },
};

const Main = ({ handleClickSOL, handleClickDHMT }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer customStyles={styles.container} size="xl">
        <Box sx={styles.choice}>
          {cards.map(
            ({ title, description, image, redirect, available }, index) => (
              <ChoiceCard
                key={index}
                title={title}
                image={image}
                available={available}
                selectedPage={redirect}
                description={description}
                handleClickSOL={handleClickSOL}
                handleClickDHMT={handleClickDHMT}
              />
            ),
          )}
        </Box>
      </AppContainer>
    </>
  );
};

export default Main;
