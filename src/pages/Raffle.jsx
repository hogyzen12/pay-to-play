import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { PayButton } from 'common/components';
import { Box } from '@mui/material';
import { DHMTamount } from 'common/static/constants';
import { routes } from 'routes';
import AppContainer from 'common/layout/AppContainer';
import staticContent from 'common/static/content.json';

const { title, description } = staticContent.meta.raffle;
const { dhmt } = staticContent.pages.main;

const styles = {};

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
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AnimatePresence>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PayButton
              title="Purchase raffle entry (1 DMND)"
              currency={dhmt}
              amount={DHMTamount}
              handlePay={handleClickDHMT}
              selectedPage={routes.home}
            />
          </Box>
        </AnimatePresence>
      </AppContainer>
    </>
  );
};

export default Raffle;
