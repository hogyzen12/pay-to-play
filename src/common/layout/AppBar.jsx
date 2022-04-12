import React from 'react';
import { useLocation } from 'react-router-dom';
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
import { Timer } from 'common/components';
import { staticContent } from 'common/static/content';
import { routes } from 'routes';

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
  burgerBtn: { color: '#fff' },
};

const AppBar = ({ providerPubKey, loginHandler, toggleDrawer }) => {
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { connected, walletButton } = staticContent.header;

  const handleConnectWallet = () => {
    if (loginHandler) loginHandler();
  };

  const homeWalletStatus = () => (
    <>
      <Typography sx={styles.key}>{providerPubKey?.toBase58()}</Typography>
      <Typography sx={styles.connected}>{connected}</Typography>
    </>
  );

  const gameWalletStatus = () =>
    matches ? (
      homeWalletStatus()
    ) : (
      <IconButton sx={styles.burgerBtn} onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
    );

  return (
    <AppHeading sx={styles.header} position="static">
      <Toolbar sx={styles.toolbar}>
        <IconButton size="large" edge="start">
          <Logo width="32" />
        </IconButton>

        {location.pathname === routes.crossword && <Timer />}

        <Box sx={styles.wallet}>
          {location.pathname === routes.home && !providerPubKey && (
            <Button
              color="secondary"
              variant="contained"
              sx={styles.button}
              onClick={handleConnectWallet}
            >
              {walletButton}
            </Button>
          )}

          {location.pathname === routes.home &&
            providerPubKey &&
            homeWalletStatus()}

          {location.pathname === routes.crossword && gameWalletStatus()}
        </Box>
      </Toolbar>
    </AppHeading>
  );
};

export default AppBar;
