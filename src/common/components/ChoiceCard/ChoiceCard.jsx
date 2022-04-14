import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import { PayButton } from 'common/components';
import { staticContent } from 'common/static/content';
import { styles } from './ChoiceCard.styles';

const SOLamount = '0.1';
const DHMTamount = '1';
const { dhmt, sol, start } = staticContent.pages.main;

const ChoiceCard = ({
  title,
  image,
  available,
  description,
  selectedPage,
  handleClickSOL,
  handleClickDHMT,
}) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.image}
        image={image}
        component="img"
        height="240"
        alt={title}
      />

      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant="h3">
          {title}
        </Typography>
        <Typography sx={styles.description} variant="body1">
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={styles.actions} disableSpacing>
        <Typography sx={styles.start} variant="h3">
          {start}
        </Typography>
        <Box sx={styles.buttons}>
          {available ? (
            <>
              <PayButton
                currency={sol}
                amount={SOLamount}
                handlePay={handleClickSOL}
                selectedPage={selectedPage}
              />
              <PayButton
                currency={dhmt}
                amount={DHMTamount}
                handlePay={handleClickDHMT}
                selectedPage={selectedPage}
              />
            </>
          ) : (
            <Typography sx={styles.soon} variant="h3">
              Available soon
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ChoiceCard;
