import React from 'react';
import {
  Box,
  Toolbar,
  Typography,
  Button as MuiButton,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Button } from '../components';

const styles = {
  footer: {
    gridArea: 'AppBasement',
    borderTop: theme => `1px solid ${theme.palette.success.main}`,
    padding: '36px 0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
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
};

const AppBasement = ({ resetResult, submitResult }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleReset = () => resetResult();
  const handleSubmit = () => submitResult();

  return (
    <Box sx={styles.footer} component="footer">
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.technical}>
          <Typography variant="body1" color="text.secondary">
            Technical problems?
          </Typography>
          <Link sx={styles.link} href="#">
            Let us know
          </Link>
        </Box>

        <Box sx={styles.buttons}>
          <MuiButton
            sx={styles.reset}
            onClick={handleReset}
            color="info"
            variant="contained"
          >
            Reset
          </MuiButton>
          <Button onClick={handleSubmit} />
        </Box>
      </Toolbar>
    </Box>
  );
};

export default AppBasement;
