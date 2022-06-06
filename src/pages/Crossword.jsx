import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import { Game } from 'common/components';
import { AppContainer } from 'common/layout';
import withMetadata from 'common/hoc/withMetadata';
import staticContent from 'common/static/content.json';

const { title, description } = staticContent.meta.crossword;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Crossword = () => (
  <AppContainer customStyles={styles.container} size="xl">
    <AnimatePresence>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Game />
      </Box>
    </AnimatePresence>
  </AppContainer>
);

export default withMetadata({ title, description })(Crossword);
