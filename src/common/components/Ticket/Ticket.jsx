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
import { DHMTamount } from 'common/static/constants';
import { styles } from './Ticket.styles';
import staticContent from 'common/static/content.json';

const { dhmt } = staticContent.pages.main;
const { sold, winners, closed } = staticContent.pages.raffle;

const Ticket = ({ title, image, selectedPage, transitionDelay, handlePay }) => {
  return (
    <Card
      sx={styles.ticket}
      exit={{ opacity: 0 }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transitionDelay}
    >
      <CardMedia
        sx={styles.image}
        alt={title}
        image={image}
        component="img"
        height="240"
      />

      <CardContent sx={styles.content}>
        <Typography sx={styles.title} variant="h2">
          {title}
        </Typography>

        <Box sx={styles.stats}>
          <Typography sx={styles.sold} component="span">
            0 {sold}
          </Typography>
          <Typography sx={styles.winners} component="span">
            0 {winners}
          </Typography>
        </Box>

        <Typography sx={styles.countdown} variant="h3">
          {closed}
        </Typography>
      </CardContent>

      <CardActions sx={styles.actions} disableSpacing>
        <PayButton
          title="Purchase raffle entry (1 DMND)"
          currency={dhmt}
          amount={DHMTamount}
          handlePay={handlePay}
          selectedPage={selectedPage}
        />
      </CardActions>
    </Card>
  );
};

export default Ticket;
