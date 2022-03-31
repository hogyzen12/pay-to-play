import React from 'react';
import { Container } from '@mui/material';

const styles = {
  container: {
    height: '100%',
    padding: { xs: '32px 0 48px', md: '32px 0 55px' },
  },
};

const AppContainer = ({ children }) => (
  <Container sx={styles.container} maxWidth="md">
    {children}
  </Container>
);

export default AppContainer;
