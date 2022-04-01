import React from 'react';
import {
  Box,
  AppBar as AppHeading,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import { ReactComponent as Logo } from '../../assets/icons/diamond.svg';

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
};

const AppBar = ({ providerPubKey, loginHandler }) => {
  const handleConnectWallet = () => {
    if (loginHandler) loginHandler();
  };

  return (
    <AppHeading sx={styles.header} position="static">
      <Toolbar sx={styles.toolbar}>
        <IconButton size="large" edge="start">
          <Logo width="32" />
        </IconButton>

        {providerPubKey ? (
          <Box sx={styles.wallet}>
            <Typography sx={styles.key}>{providerPubKey.toBase58()}</Typography>
            <Typography sx={styles.connected}>Connected</Typography>
          </Box>
        ) : (
          <Button
            color="secondary"
            variant="contained"
            sx={styles.button}
            onClick={handleConnectWallet}
          >
            Connect wallet
          </Button>
        )}
      </Toolbar>
    </AppHeading>
  );
};

export default AppBar;
