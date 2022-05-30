import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { cards } from 'common/static/cards';
import { routes } from 'routes';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';
import future from 'assets/image/cards/future.png';

const { title, description } = staticContent.meta.main;

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

const Main = ({ handleClickSOL, handleClickDHMT }) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>

    <AppContainer customStyles={styles.container} size="xl">
      <Box sx={styles.choice}>
        <ChoiceCard
          title="Articles"
          image={future}
          payment={{
            free: true,
          }}
          available={true}
          selectedPage={routes.articles}
          description="Open Articles list..."
          transitionDelay={0.1}
          handleClickSOL={handleClickSOL}
          handleClickDHMT={handleClickDHMT}
          customStyles={{
            maxWidth: '100%',
            gridColumn: { md: '1 / 3', xl: '1 / 4' },
          }}
        />
        {cards.map(
          (
            {
              title,
              description,
              image,
              redirect,
              available,
              payment,
              transitionDelay,
            },
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
              transitionDelay={transitionDelay}
              handleClickDHMT={handleClickDHMT}
            />
          ),
        )}
      </Box>
    </AppContainer>
  </>
);

export default Main;
