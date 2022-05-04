import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import { PayButton } from 'common/components';
import { SOLamount, DHMTamount, SHDWamount } from 'common/static/constants';
import { styles } from './ChoiceCard.styles';
import staticContent from 'common/static/content.json';

const { dhmt, sol, shdw, start, comming } = staticContent.pages.main;

const ChoiceCard = ({
  title,
  image,
  payment,
  available,
  description,
  selectedPage,
  handleClickSOL,
  transitionDelay,
  handleClickDHMT,
}) => {
  return (
    <Card
      sx={styles.card}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: transitionDelay }}
    >
      <CardMedia
        sx={styles.image}
        alt={title}
        image={image}
        component="img"
        height="240"
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
              {payment.sol && (
                <PayButton
                  currency={sol}
                  amount={SOLamount}
                  handlePay={handleClickSOL}
                  selectedPage={selectedPage}
                />
              )}
              {payment.dhmt && (
                <PayButton
                  currency={dhmt}
                  amount={DHMTamount}
                  handlePay={handleClickDHMT}
                  selectedPage={selectedPage}
                />
              )}
              {payment.shdw && (
                <PayButton
                  currency={shdw}
                  amount={SHDWamount}
                  handlePay={handleClickDHMT}
                  selectedPage={selectedPage}
                />
              )}
              {payment.free && (
                <PayButton
                  title="Open"
                  currency="free"
                  handlePay={handleClickDHMT}
                  selectedPage={selectedPage}
                />
              )}
            </>
          ) : (
            <Typography sx={styles.soon} variant="h3">
              {comming}
            </Typography>
          )}
        </Box>
      </CardActions>
    </Card>
  );
};

export default ChoiceCard;
