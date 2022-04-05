import React from 'react';
import { Box, Typography } from '@mui/material';
import { Tabs } from 'common/components';
import { staticContent } from 'common/static/content';
import { styles } from './Hints.styles';

const Hints = () => {
  const { hints } = staticContent.pages.crossword;

  return (
    <Box sx={styles.hints}>
      <Typography sx={styles.title} variant="h3">
        {hints}
      </Typography>
      <Tabs />
    </Box>
  );
};

export default Hints;
