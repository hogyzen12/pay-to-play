import React from 'react';
import { Box, Typography, Stack, styled } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { AppContainer } from 'common/layout';
import { articles } from 'common/static/articles';
import withMetadata from 'common/hoc/withMetadata';
import staticContent from 'common/static/content.json';

const { title, description } = staticContent.meta.articles;
const { pageTitle } = staticContent.pages.articles;

const styles = {
  // container: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: '32px 0',
  // },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px 16px',
    maxWidth: '1600px',
    margin: '0 auto',
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
  card: {
    minHeight: '540px',
  },
  wrapper: {},
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

const Articles = ({ handlePay }) => (
  // <AppContainer size="xl" customStyles={styles.container}>
  <Box sx={styles.container}>
    <Typography sx={styles.title} variant="h2" component="h2">
      {pageTitle}
    </Typography>

    <Stack sx={styles.wrapper} direction="row" spacing={1}>
      <Box sx={styles.item}>
        {articles.categoryA.map((article, index) => (
          <ChoiceCard
            key={index}
            card={article}
            handlePay={handlePay}
            customStyles={styles.card}
          />
        ))}
      </Box>
      <Box sx={styles.item}>
        {articles.categoryB.map((article, index) => (
          <ChoiceCard
            key={index}
            card={article}
            handlePay={handlePay}
            customStyles={styles.card}
          />
        ))}
      </Box>
      <Box sx={styles.item}>
        {articles.categoryC.map((article, index) => (
          <ChoiceCard
            key={index}
            card={article}
            handlePay={handlePay}
            customStyles={styles.card}
          />
        ))}
      </Box>
      <Box sx={styles.item}>
        {articles.categoryD.map((article, index) => (
          <ChoiceCard
            key={index}
            card={article}
            handlePay={handlePay}
            customStyles={styles.card}
          />
        ))}
      </Box>
    </Stack>
  </Box>
  /* </AppContainer> */
);

export default withMetadata({ title, description })(Articles);
