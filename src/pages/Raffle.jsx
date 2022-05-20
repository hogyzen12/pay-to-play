import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, FAQs } from 'common/components';
import { tickets } from 'common/static/tickets';
import { raffleFAQs, raffleArchive } from 'common/static/faqs';
import AppContainer from 'common/layout/AppContainer';
import staticContent from 'common/static/content.json';

const { title, description } = staticContent.meta.raffle;
const { pageTitle } = staticContent.pages.raffle;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickets: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
      lg: 'repeat(3, 1fr)',
    },
    gridTemplateRows: { xs: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' },
    gridColumnGap: { md: '24px' },
    gridRowGap: '24px',
    mb: '48px',
  },
  title: { padding: '32px 0' },
  faqs: {
    display: 'flex',
    flexDirection: { xs: 'column', lg: 'row' },
    gap: '8px',
  },
};

const Raffle = ({ providerPubKey, setAlertState, setLoading, provider }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer size="xl" customStyles={styles.container}>
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

        <Box sx={styles.faqs}>
          <FAQs
            customStyles={{ mb: { xs: '48px', md: '0' } }}
            dataFAQs={raffleFAQs}
          />
          <FAQs dataFAQs={raffleArchive} />
        </Box>
      </AppContainer>
    </>
  );
};

export default Raffle;
