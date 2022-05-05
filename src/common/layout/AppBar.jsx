import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import { ReactComponent as Logo } from 'assets/icons/diamond.svg';
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
  timer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: 'custom.white',
    // marginRight: '16px',
  },
  timeEnd: {
    color: '#FF0000',
  },
};

const AppBar = ({
  seconds,
  minutes,
  provider,
  setProvider,
  providerPubKey,
  toggleDrawer,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const loginHandler = () => {
    if (!provider && window.solana) {
      setProvider(window.solana);
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

  const homeWalletStatus = () => (
    <>
      <Typography sx={styles.key}>{providerPubKey?.toBase58()}</Typography>
      <Typography sx={providerPubKey ? styles.connected : styles.notConnected}>
        {providerPubKey ? connected : notConnected}
      </Typography>
    </>
  );

  const gameWalletStatus = () =>
    matches ? (
      homeWalletStatus()
    ) : (
      <IconButton sx={styles.burgerBtn} onClick={handleBurgerClick}>
        <MenuIcon />
      </IconButton>
    );

  return (
    <AppHeading sx={styles.header} position="static">
      <Toolbar sx={styles.toolbar}>
        <IconButton
          size="large"
          edge="start"
          onClick={() => navigate(routes.home)}
        >
          <Logo width="32" />
        </IconButton>

        {location.pathname !== routes.home &&
          location.pathname !== routes.raffle && (
            <Box sx={styles.timer}>
              <Typography
                sx={
                  minutes === 0 && seconds <= 10 ? styles.timeEnd : styles.time
                }
                variant="h3"
              >
                {minutes < 10 ? `0${minutes}` : minutes} :
                {seconds < 10 ? `0${seconds}` : seconds}
              </Typography>
            </Box>
          )}

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

          {location.pathname !== routes.crossword &&
            providerPubKey &&
            homeWalletStatus()}

          {location.pathname === routes.crossword && gameWalletStatus()}
        </Box>
      </Toolbar>
    </AppHeading>
  );
};

export default AppBar;
