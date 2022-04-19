import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { cards } from 'common/static/cards';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.home;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choice: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
      xl: 'repeat(3, 1fr)',
    },
    gridTemplateRows: { xs: 'repeat(5, 1fr)', md: 'repeat(2, 1fr)' },
    gridColumnGap: { md: '16px' },
    gridRowGap: '16px',
  },
};

const Main = ({ handleClickSOL, handleClickDHMT, handleClickSHDW }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer customStyles={styles.container} size="xl">
        <Box sx={styles.choice}>
          {cards.map(
            (
              { title, description, image, redirect, available, payment },
              index,
            ) => (
              <ChoiceCard
                key={index}
                title={title}
                image={image}
                payment={payment}
                available={available}
                selectedPage={redirect}
                description={description}
                handleClickSOL={handleClickSOL}
                handleClickDHMT={handleClickDHMT}
                handleClickSHDW={handleClickSHDW}
              />
            ),
          )}
        </Box>
      </AppContainer>
    </>
  );
};

export default Main;
