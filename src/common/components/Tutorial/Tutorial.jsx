import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Collapse,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { staticContent } from 'common/static/content';
import { styles } from './Tutorial.styles';

const Tutorial = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const { howToPlay, howToDescription, howToDescriptionSecond } =
    staticContent.pages.home;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={styles.tutor}>
      <Typography sx={styles.title} variant="h3">
        {howToPlay}
      </Typography>
      <Typography sx={styles.description} variant="body1">
        {howToDescription}
      </Typography>
      {!matches && !expanded && (
        <Button sx={styles.expandButton} onClick={handleExpandClick}>
          <Typography variant="body1">Read more</Typography>
        </Button>
      )}
      {matches ? (
        <Typography sx={styles.descriptionSecond} variant="body1">
          {howToDescriptionSecond}
        </Typography>
      ) : (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography sx={styles.descriptionSecond} variant="body1">
            {howToDescriptionSecond}
          </Typography>
        </Collapse>
      )}
    </Box>
  );
};

export default Tutorial;
