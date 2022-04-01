import React from 'react';
import { Box, Toolbar, Typography, Button, Link } from '@mui/material';

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
  submit: {
    padding: '16px 54px',
    background:
      'linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), linear-gradient(0deg, #512DA8, #512DA8), linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), #4AAF47;',
    color: theme => theme.palette.primary.main,
  },
};

const AppBasement = ({ resetResult, submitResult }) => {
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
          <Button
            sx={styles.reset}
            onClick={handleReset}
            color="info"
            variant="contained"
          >
            Reset
          </Button>
          <Button
            sx={styles.submit}
            onClick={handleSubmit}
            color="secondary"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default AppBasement;
