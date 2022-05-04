import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, FAQs } from 'common/components';
import { Box, Typography } from '@mui/material';
import AppContainer from 'common/layout/AppContainer';
import staticContent from 'common/static/content.json';
import { tickets } from 'common/static/tickets';

const { title, description } = staticContent.meta.raffle;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickets: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
    },
    gridTemplateRows: { xs: 'repeat(5, 1fr)', md: 'repeat(1, 1fr)' },
    gridColumnGap: { md: '24px' },
    gridRowGap: '24px',
    mb: '48px',
  },
};

const Raffle = ({ providerPubKey, setAlertState, setLoading, provider }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer
        size="md"
        customStyles={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        <Typography sx={{ padding: '32px 0' }} variant="h2" component="h2">
          Diamond Hands Raffle
        </Typography>

        <AnimatePresence>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={styles.tickets}
          >
            {tickets.map(
              (
                {
                  title,
                  description,
                  image,
                  redirect,
                  transitionDelay,
                  dateTime,
                },
                index,
              ) => (
                <Ticket
                  key={index}
                  title={title}
                  image={image}
                  redirect={redirect}
                  dateTime={dateTime}
                  description={description}
                  transitionDelay={transitionDelay}
                  providerPubKey={providerPubKey}
                  setAlertState={setAlertState}
                  setLoading={setLoading}
                  provider={provider}
                />
              ),
            )}
          </Box>
        </AnimatePresence>

        <FAQs />
      </AppContainer>
    </>
  );
};

export default Raffle;
