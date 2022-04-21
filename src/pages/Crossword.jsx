import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import { Game, Hints } from 'common/components';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';

const Crossword = ({ gameRef }) => {
  const { title, description } = staticContent.meta.crossword;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer>
        <AnimatePresence>
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Game gameRef={gameRef} />
          </Box>
        </AnimatePresence>
      </AppContainer>
    </>
  );
};

export default Crossword;
