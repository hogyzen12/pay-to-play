import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { staticContent } from 'common/static/content';
import { routes } from 'routes';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.notFound;
const { message, redirect } = staticContent.pages.notFound;

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
  },
  title: {
    mb: '20px',
  },
};

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate(routes.home), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer>
        <Box sx={styles.wrapper}>
          <Typography sx={styles.title} variant="h2">
            {message}
          </Typography>
          <Typography variant="body1">{redirect}</Typography>
        </Box>
      </AppContainer>
    </>
  );
};

export default NotFound;
