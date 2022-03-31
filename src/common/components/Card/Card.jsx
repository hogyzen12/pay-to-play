import React from 'react';
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import { styles } from './Card.styles';

const Card = () => {
  return (
    <MuiCard sx={styles.card}>
      <CardMedia
        sx={styles.image}
        component="img"
        height="280"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt=""
      />
      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant="h2" component="h2">
          Diamond Hands NFT Game
        </Typography>
        <Typography sx={styles.description} variant="body1">
          The Diamond Hands NFT project is backed by Cryptonary{'’'}s team of
          leading industry experts and one of the biggest established
          communities in the crypto space.
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
