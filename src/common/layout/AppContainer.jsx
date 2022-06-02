import React from 'react';
import { Container } from '@mui/material';

const styles = {
  container: {
    height: '100%',
    padding: { xs: '32px 16px 48px', md: '32px' },
  },
};

const AppContainer = ({ customStyles = {}, size = 'lg', children }) => (
  <Container sx={{ ...styles.container, ...customStyles }} maxWidth={size}>
    {children}
  </Container>
);

export default AppContainer;
