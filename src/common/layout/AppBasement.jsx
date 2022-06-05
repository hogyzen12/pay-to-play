import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Toolbar,
  Typography,
  Button as MuiButton,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { modalOpened } from 'redux/modal/modalSlice';
import { useSticky, useProvider } from 'common/hooks';
import { Button, Swipeable } from 'common/components';
import { gameResetActive } from 'redux/game/gameSlice';
import { initialResults } from 'common/static/results';
import { generateResults } from 'common/utils/misc';
import staticContent from 'common/static/content.json';

const { connected, notConnected } = staticContent.header;
const { know, reset, submit, technical } = staticContent.footer;

const styles = {
  link: {
    color: 'custom.white',
    ml: '8px',
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
    padding: { xs: '32px 0', md: '0' },
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
  key: {
    maxWidth: '120px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  connected: {
    color: theme => theme.palette.custom.apple,
    ml: '16px',
  },
  notConnected: {
    color: '#FF0000',
    ml: '16px',
  },
  provider: {
    display: 'flex',
    width: '100%',
    paddingTop: '32px',
    justifyContent: 'center',
    borderTop: theme => `1px solid ${theme.palette.success.main}`,
  },
};

const AppBasement = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { providerPubKey } = useProvider();
  const { sticky } = useSticky();

  const handleReset = () => {
    dispatch(gameResetActive());

    initialResults.across.forEach(item => {
      item.answer = '';
    });
    initialResults.down.forEach(item => {
      item.answer = '';
    });
  };

  const handleSubmit = () => {
    toggleDrawer();
    generateResults();
    dispatch(modalOpened('submit'));
  };

  const basementToolbar = () => (
    <Toolbar sx={styles.toolbar}>
      {!matches && (
        <Box sx={styles.provider}>
          <Typography sx={styles.key}>{providerPubKey?.toBase58()}</Typography>
          <Typography
            sx={providerPubKey ? styles.connected : styles.notConnected}
          >
            {providerPubKey ? connected : notConnected}
          </Typography>
        </Box>
      )}

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
          disabled={!providerPubKey}
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
