import React, { useEffect, createRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import AppContainer from '../common/layout/AppContainer';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  title: {
    mb: '20px',
  },
  text: {},
};

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>Not Found</title>
        <meta name="description" content="Page doesn't exist" />
      </Helmet>

      <AppContainer>
        <Box sx={styles.wrapper}>
          <Typography sx={styles.title} variant="h2">
            Sorry, this page does not exist
          </Typography>
          <Typography sx={styles.text}>
            You will be redirected to home page in 5 seconds
          </Typography>
        </Box>
      </AppContainer>
    </>
  );
};

export default NotFound;
