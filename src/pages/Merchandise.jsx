import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardMedia, CardContent, Box } from '@mui/material';
import { FAQs } from 'common/components';
import staticContent from 'common/static/content.json';
import { merchFAQs } from 'common/static/faqs';
import AppContainer from 'common/layout/AppContainer';
import airdrop from 'assets/image/airdrop.jpg';

const { title, description } = staticContent.meta.merchandise;
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
};

const Merchandise = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>

    <AppContainer size="xl" customStyles={styles.container}>
      <AnimatePresence>
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Card>
            <CardMedia sx={styles.media} src={airdrop} component="img" />
            <CardContent sx={styles.content}>
              <Box sx={styles.box}></Box>
              <FAQs dataFAQs={merchFAQs} customStyles={styles.faqs} />
            </CardContent>
          </Card>
        </Box>
      </AnimatePresence>
    </AppContainer>
  </>
);

export default Merchandise;
