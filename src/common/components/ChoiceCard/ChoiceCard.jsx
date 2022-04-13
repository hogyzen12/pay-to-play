import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import { ReactComponent as EmptySvg } from 'assets/icons/emptyImage.svg';
import { PayButton } from 'common/components';
import { staticContent } from 'common/static/content';
import { styles } from './ChoiceCard.styles';

const SOLamount = '0.1';
const DHMTamount = '1';
const { dhmt, sol } = staticContent.pages.main;

const ChoiceCard = ({
  handleClickSOL,
  handleClickDHMT,
  title,
  image = '',
  selectedPage,
}) => {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant="h3">
          {title}
        </Typography>
      </CardContent>

      <Box sx={styles.mediaBox}>
        {image ? (
          <CardMedia
            sx={styles.image}
            image={image}
            component="img"
            height="280"
            alt=""
          />
        ) : (
          <EmptySvg />
        )}
      </Box>

      <CardActions sx={styles.actions} disableSpacing>
        <Box sx={styles.buttons}>
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
        </Box>
      </CardActions>
    </Card>
  );
};

export default ChoiceCard;
