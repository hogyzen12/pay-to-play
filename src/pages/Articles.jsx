import React from 'react';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { AppContainer } from 'common/layout';
import { ArticleStack, ArticleTabs } from 'common/components';
import withMetadata from 'common/hoc/withMetadata';
import staticContent from 'common/static/content.json';

const { title, description } = staticContent.meta.articles;
const { pageTitle } = staticContent.pages.articles;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: {
      xs: 'start',
      xl: 'center',
    },
    maxWidth: { xl: '1900px' },
  },
  title: {
    mb: '32px',
  },
};

const Articles = ({ handlePay }) => {
  const theme = useTheme();
  const isDesktopView = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <AppContainer size="xl" customStyles={styles.container}>
      <Typography sx={styles.title} variant="h2" component="h2">
        {pageTitle}
      </Typography>

      {isDesktopView ? (
        <ArticleStack handlePay={handlePay} />
      ) : (
        <ArticleTabs handlePay={handlePay} />
      )}
    </AppContainer>
  );
};

export default withMetadata({ title, description })(Articles);
