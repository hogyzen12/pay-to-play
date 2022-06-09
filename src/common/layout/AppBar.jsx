import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Box,
  AppBar as AppHeading,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Logo, Timer } from 'common/components';
import { useProvider } from 'common/hooks';
import { setProvider } from 'redux/provider/providerSlice';
import { getTimerDisplayed } from 'common/utils/misc';
import { routes } from 'routes';
import staticContent from 'common/static/content.json';

const { connected, notConnected, walletButton } = staticContent.header;

const styles = {
  header: {
    gridArea: 'AppBar',
    maxHeight: '100px',
    borderBottom: theme => `1px solid ${theme.palette.custom.thunder}`,
    padding: '16px 0',
    boxShadow: 'none',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  button: {
    padding: { xs: '16px', md: '16px 24px' },
  },
  wallet: {
    display: 'flex',
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
  burgerBtn: { color: '#fff' },
};

const AppBar = ({ toggleDrawer }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { provider, providerPubKey } = useProvider();

  const loginHandler = () => {
    if (!provider && window.solana) {
      dispatch(setProvider(window.solana));
    } else if (!provider) {
      console.log('No provider found');
      return;
    } else if (provider && !provider.isConnected) {
      provider.connect();
    }
  };

  const handleBurgerClick = () => {
    if (toggleDrawer) toggleDrawer(true);
  };

  const gameWalletStatus = () =>
    matches ? (
      <>
        <Typography sx={styles.key}>{providerPubKey?.toBase58()}</Typography>
        <Typography
          sx={providerPubKey ? styles.connected : styles.notConnected}
        >
          {providerPubKey ? connected : notConnected}
        </Typography>
      </>
    ) : (
      <IconButton sx={styles.burgerBtn} onClick={handleBurgerClick}>
        <MenuIcon />
      </IconButton>
    );

  const displayTimer = getTimerDisplayed(location.pathname, routes);

  return (
    <AppHeading sx={styles.header} position="static">
      <Toolbar sx={styles.toolbar}>
        <Logo />
        {displayTimer && <Timer />}

        <Box sx={styles.wallet}>
          {location.pathname === routes.home && !providerPubKey && (
            <Button
              color="secondary"
              variant="contained"
              sx={styles.button}
              onClick={loginHandler}
            >
              {walletButton}
            </Button>
          )}

          {location.pathname !== routes.crossword && providerPubKey && (
            <>
              <Typography sx={styles.key}>
                {providerPubKey?.toBase58()}
              </Typography>
              <Typography
                sx={providerPubKey ? styles.connected : styles.notConnected}
              >
                {providerPubKey ? connected : notConnected}
              </Typography>
            </>
          )}

          {location.pathname === `/${routes.crossword}` && gameWalletStatus()}
        </Box>
      </Toolbar>
    </AppHeading>
  );
};

export default AppBar;
