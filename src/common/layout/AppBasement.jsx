import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Button as MuiButton,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Button, Swipeable } from '../components';
import { staticContent } from '../static/content';

const styles = {
  link: {
    color: 'custom.white',
    ml: { md: '8px' },
    textDecoration: 'underline',
  },
  footer: {
    gridArea: 'AppBasement',
    borderTop: theme => `1px solid ${theme.palette.success.main}`,
    padding: '36px 0',
  },
  toolbar: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { md: 'space-between' },
  },
  technical: {
    display: 'flex',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
  },
  reset: {
    padding: '16px 24px',
  },
};

const AppBasement = ({ resetResult, submitResult, toggleDrawer, open }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { know, reset, submit, technical } = staticContent.footer;

  const handleReset = () => {
    resetResult();
  };

  const handleSubmit = () => {
    toggleDrawer();
    submitResult();
  };

  const basementToolbar = () => (
    <Toolbar sx={styles.toolbar}>
      <Box sx={styles.technical}>
        <Typography variant="body1" color="text.secondary">
          {technical}
        </Typography>
        <Link sx={styles.link} href="#">
          {know}
        </Link>
      </Box>

      <Box sx={styles.buttons}>
        <MuiButton
          sx={styles.reset}
          onClick={handleReset}
          color="info"
          variant="contained"
        >
          {reset}
        </MuiButton>
        <Button title={submit} onClick={handleSubmit} />
      </Box>
    </Toolbar>
  );

  return (
    <>
      {matches ? (
        <Box sx={styles.footer} component="footer">
          {basementToolbar()}
        </Box>
      ) : (
        <Swipeable open={open} toggleDrawer={toggleDrawer}>
          {basementToolbar()}
        </Swipeable>
      )}
    </>
  );
};

export default AppBasement;
