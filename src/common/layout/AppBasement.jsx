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
import { useSticky } from 'common/hooks/useSticky';
import { Button, Swipeable } from 'common/components';
import staticContent from 'common/static/content.json';

const { know, reset, submit, technical } = staticContent.footer;

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
  footerSticky: {
    position: 'sticky',
    bottom: 0,
    gridArea: 'AppBasement',
    borderTop: 'none',
    padding: '36px 0',
    bgcolor: 'custom.black',
  },
  toolbar: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    justifyContent: { md: 'space-between' },
  },
  technical: {
    display: 'flex',
  },
  buttons: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', md: 'row' },
    width: { xs: '100%', md: 'fit-content' },
    gap: '16px',
    paddingBottom: { xs: '32px', md: '0' },
    borderBottom: { xs: '1px solid #404040', md: 'none' },
  },
  reset: {
    padding: '16px 24px',
  },
};

const AppBasement = ({
  open,
  resetTimer,
  toggleDrawer,
  providerPubKey,
  generateResults,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { sticky } = useSticky();

  const handleReset = () => {
    if (resetTimer) resetTimer();
  };

  const handleSubmit = () => {
    toggleDrawer();
    generateResults();
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
          onClick={handleReset}
          sx={styles.reset}
          color="info"
          variant="contained"
        >
          {reset}
        </MuiButton>
        <Button
          title={submit}
          onClick={handleSubmit}
          // disabled={!providerPubKey} // !TODO: uncomment when app ready
        />
      </Box>
    </Toolbar>
  );

  return (
    <>
      {matches ? (
        <Box
          sx={sticky ? styles.footerSticky : styles.footer}
          component="footer"
        >
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
