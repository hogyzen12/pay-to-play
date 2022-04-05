import React from 'react';
import { Box, Typography } from '@mui/material';
import { staticContent } from 'common/static/content';
import { styles } from './Tutorial.styles';

const Tutorial = () => {
  const { howToPlay, howToDescription, howToDescriptionSecond } =
    staticContent.pages.home;

  return (
    <Box sx={styles.tutor}>
      <Typography sx={styles.title} variant="h3">
        {howToPlay}
      </Typography>
      <Typography sx={styles.description} variant="body1">
        {howToDescription}
      </Typography>
      <Typography sx={styles.descriptionSecond} variant="body1">
        {howToDescriptionSecond}
      </Typography>
    </Box>
  );
};

export default Tutorial;
