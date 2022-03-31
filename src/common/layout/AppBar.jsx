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
    borderBottom: '1px solid #221F20',
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
  connected: {
    color: '#4AAF47',
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
            <Typography>{providerPubKey.toBase58()}</Typography>
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
