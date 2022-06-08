import React from 'react';
import { Box, Typography } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { AppContainer } from 'common/layout';
import { articles } from 'common/static/articles';
import withMetadata from 'common/hoc/withMetadata';
import staticContent from 'common/static/content.json';

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

const Articles = ({ handlePay }) => (
  <AppContainer size="xl" customStyles={styles.container}>
    <Typography sx={styles.title} variant="h2" component="h2">
      {pageTitle}
    </Typography>

    <Box sx={styles.choice}>
      {articles.map((article, index) => (
        <ChoiceCard key={index} card={article} handlePay={handlePay} />
      ))}
    </Box>
  </AppContainer>
);

export default withMetadata({ title, description })(Articles);
