import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, FAQs } from 'common/components';
import { tickets } from 'common/static/tickets';
import AppContainer from 'common/layout/AppContainer';
import staticContent from 'common/static/content.json';

const { title, description } = staticContent.meta.raffle;
const { pageTitle } = staticContent.pages.raffle;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCustom: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tickets: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
    },
    gridTemplateRows: { xs: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' },
    gridColumnGap: { md: '24px' },
    gridRowGap: '24px',
    mb: '48px',
    width: '100%',
  },
  title: { padding: '32px 0' },
};

const Raffle = ({ providerPubKey, setAlertState, setLoading, provider }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer size="md" customStyles={styles.containerCustom}>
        <Typography sx={styles.title} variant="h2" component="h2">
          {pageTitle}
        </Typography>

        <AnimatePresence>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            sx={styles.tickets}
          >
            {tickets.map((ticket, index) => (
              <Ticket
                key={index}
                providerPubKey={providerPubKey}
                setAlertState={setAlertState}
                setLoading={setLoading}
                provider={provider}
                {...ticket}
              />
            ))}
          </Box>
        </AnimatePresence>

        <FAQs />
      </AppContainer>
    </>
  );
};

export default Raffle;
