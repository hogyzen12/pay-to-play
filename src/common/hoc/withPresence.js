import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import { AppContainer } from 'common/layout';

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
  listItem: { padding: '0 0 0 16px' },
};

const withPresence = meta => WrappedPage => {
  return class WithMetadata extends Component {
    render() {
      return (
        <>
          <Helmet>
            <title>{meta?.title}</title>
            <meta name="description" content={meta?.description} />
          </Helmet>

          <AppContainer size="md">
            <AnimatePresence>
              <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                sx={{ userSelect: 'none' }}
              >
                <WrappedPage styles={styles} {...this.props} />
              </Box>
            </AnimatePresence>
          </AppContainer>
        </>
      );
    }
  };
};

export default withPresence;
