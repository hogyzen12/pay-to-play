import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket } from 'common/components';
import { Box } from '@mui/material';
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
    gridTemplateColumns: {
      xs: '1fr',
      xl: 'repeat(1, 1fr)',
    },
    gridTemplateRows: { xs: 'repeat(5, 1fr)', md: 'repeat(1, 1fr)' },
    gridColumnGap: { md: '16px' },
    gridRowGap: '16px',
  },
};

const Raffle = ({ handleClickDHMT }) => {
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
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
                { title, description, image, redirect, transitionDelay },
                index,
              ) => (
                <Ticket
                  key={index}
                  title={title}
                  image={image}
                  redirect={redirect}
                  description={description}
                  handlePay={handleClickDHMT}
                  transitionDelay={transitionDelay}
                />
              ),
            )}
          </Box>
        </AnimatePresence>
      </AppContainer>
    </>
  );
};

export default Raffle;
