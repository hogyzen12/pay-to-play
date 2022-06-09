import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { AppContainer } from 'common/layout';
import { FAQs, Banner } from 'common/components';
import { merchFAQs } from 'common/static/faqs';
import { discountCode } from 'common/static/constants';
import staticContent from 'common/static/content.json';
import withMetadata from 'common/hoc/withMetadata';

const { title, description } = staticContent.meta.merchandise;
const { discountTitle } = staticContent.pages.merchandise;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    borderRadius: '10px',
    mb: '48px',
    width: '100%',
    height: 'auto',
    minHeight: '230px',
    zIndex: 50,
  },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '40px',
    width: '100%',
  },
  box: { width: { xs: '100%', md: '50%' } },
  faqs: { maxWidth: { xs: '100%', md: '50%' } },
  codeTitle: { fontSize: '40px', mb: '40px' },
  code: {
    fontSize: { xs: '20px', md: '32px' },
    border: '1px solid #fff',
    padding: '10px 20px',
    borderRadius: '6px',
  },
};

const Merchandise = () => (
  <AppContainer size="xl" customStyles={styles.container}>
    <AnimatePresence>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Banner />
        <Box sx={styles.content}>
          <FAQs dataFAQs={merchFAQs} customStyles={styles.faqs} />
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography sx={styles.codeTitle} variant="h2">
              {discountTitle}
            </Typography>
            <Typography sx={styles.code} variant="body1" component="span">
              {discountCode}
            </Typography>
          </Box>
        </Box>
      </Box>
    </AnimatePresence>
  </AppContainer>
);

export default withMetadata({ title, description })(Merchandise);
