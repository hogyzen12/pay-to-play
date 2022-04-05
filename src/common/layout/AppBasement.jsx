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
import { staticContent } from '../static/content';

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
  const { know, reset, submit, technical } = staticContent.footer;

  const handleReset = () => resetResult();
  const handleSubmit = () => submitResult();

  return (
    <Box sx={styles.footer} component="footer">
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
    </Box>
  );
};

export default AppBasement;
