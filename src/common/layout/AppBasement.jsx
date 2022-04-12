import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Button as MuiButton,
  SwipeableDrawer,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Button } from '../components';
import { staticContent } from '../static/content';

const drawerBleeding = 56;

const styles = {
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
  toolbarMobile: {
    position: 'absolute',
    top: -drawerBleeding,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    visibility: 'visible',
    right: 0,
    left: 0,
  },
  technical: {
    display: 'flex',
  },
  link: {
    color: 'custom.white',
    ml: { md: '8px' },
    textDecoration: 'underline',
  },
  buttons: {
    display: 'flex',
    gap: '16px',
  },
  reset: {
    padding: '16px 24px',
  },
  puller: {
    width: 30,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  },
};

const AppBasement = ({ resetResult, submitResult, toggleDrawer, open }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { know, reset, submit, technical } = staticContent.footer;

  const handleReset = () => resetResult();
  const handleSubmit = () => submitResult();

  const basementToolbar = () => (
    <Toolbar sx={matches ? styles.toolbar : styles.toolbarMobile}>
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
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box sx={styles.puller}></Box>
          {basementToolbar()}
        </SwipeableDrawer>
      )}
    </>
  );
};

export default AppBasement;
