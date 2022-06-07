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
import {
  SOLamount,
  DHMTamount,
  SHDWamount,
  SOL,
  SHDW,
  DMND,
  FREE,
} from 'common/static/constants';
import { styles } from './ChoiceCard.styles';
import staticContent from 'common/static/content.json';

const { start, comming } = staticContent.pages.main;

const ChoiceCard = ({ card, handlePay, customStyles = {} }) => {
  const {
    title,
    image,
    payment,
    redirect,
    available,
    description,
    transitionDelay,
  } = card;

  return (
    <Card
      sx={{ ...styles.card, ...customStyles }}
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
                  currency={SOL}
                  amount={SOLamount}
                  handlePay={handlePay}
                  selectedPage={redirect}
                />
              )}
              {payment.dhmt && (
                <PayButton
                  currency={DMND}
                  amount={DHMTamount}
                  handlePay={handlePay}
                  selectedPage={redirect}
                />
              )}
              {payment.shdw && (
                <PayButton
                  currency={SHDW}
                  amount={SHDWamount}
                  handlePay={handlePay}
                  selectedPage={redirect}
                />
              )}
              {payment.free && (
                <PayButton
                  title="Open"
                  currency={FREE}
                  handlePay={handlePay}
                  selectedPage={redirect}
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
