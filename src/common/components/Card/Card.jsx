import React from 'react';
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import staticContent from 'common/static/content';
import { styles } from './Card.styles';

const Card = () => {
  const { title, description } = staticContent.pages.home;

  return (
    <MuiCard sx={styles.card}>
      <CardMedia
        sx={styles.image}
        component="img"
        height="280"
        image=""
        alt=""
      />
      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant="h2" component="h2">
          {title}
        </Typography>
        <Typography sx={styles.description} variant="body1">
          {description}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
