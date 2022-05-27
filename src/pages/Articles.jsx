import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { articles } from 'common/static/articles';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.articles;
const { pageTitle } = staticContent.pages.articles;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    mb: '32px',
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

const Articles = ({ handleClickSOL, handleClickDHMT }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer size="xl" customStyles={styles.container}>
        <Typography sx={styles.title} variant="h2" component="h2">
          {pageTitle}
        </Typography>

        <Box sx={styles.choice}>
          {articles.map(
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
};

export default Articles;
