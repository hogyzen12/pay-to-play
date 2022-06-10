import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CardMedia,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { AppContainer } from 'common/layout';
import staticContent from 'common/static/content.json';
import withMetadata from 'common/hoc/withMetadata';
import xchain from 'assets/image/cards/xchain.png';

const { title, description } = staticContent.meta.xchain;

const styles = {
  title: {
    fontSize: { xs: '24px', md: '32px' },
    lineHeight: { xs: '24px', md: '32px' },
    fontWeight: 600,
    mb: '32px',
    color: '#fff',
  },
  italicText: {
    fontStyle: 'italic',
  },
  boldText: {
    fontWeight: 600,
  },
  link: {
    color: '#3366BB',
  },
  regular: { mb: '16px' },
};

const XChain = () => (
  <AppContainer size="md">
    <AnimatePresence>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        sx={{ userSelect: 'none' }}
      >
        <CardMedia sx={{ mb: '24px' }} src={xchain} component="img" />
      </Box>
    </AnimatePresence>
  </AppContainer>
);

export default withMetadata({ title, description })(XChain);
