import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CardMedia,
  Typography,
  Link,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.alphaTwenty;

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

const AlphaTwenty = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>

    <AppContainer size="md">
      <AnimatePresence>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          sx={{ userSelect: 'none' }}
        ></Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default AlphaTwenty;
