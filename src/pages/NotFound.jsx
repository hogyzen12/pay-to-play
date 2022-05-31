import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { AppContainer } from 'common/layout';
import { routes } from 'routes';
import withMetadata from 'common/hoc/withMetadata';
import staticContent from 'common/static/content.json';

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
    <AppContainer>
      <Box sx={styles.wrapper}>
        <Typography sx={styles.title} variant="h2">
          {message}
        </Typography>
        <Typography variant="body1">{redirect}</Typography>
      </Box>
    </AppContainer>
  );
};

export default withMetadata({ title, description })(NotFound);
