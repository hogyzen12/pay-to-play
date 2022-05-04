import React from 'react';
import { Container } from '@mui/material';

const styles = {
  container: {
    height: '100%',
    padding: { xs: '32px 16px 48px', md: '32px' },
    // padding: { xs: '32px 16px 48px', md: '32px 48px 55px' },
    // maxWidth: { md: '1500px' },
  },
};

const AppContainer = ({ customStyles = {}, size = 'lg', children }) => (
  <Container sx={{ ...styles.container, ...customStyles }} maxWidth={size}>
    {children}
  </Container>
);

export default AppContainer;
