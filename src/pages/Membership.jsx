import React from 'react';
import { Card, CardMedia, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { AppContainer } from 'common/layout';
import { Form, FAQs } from 'common/components';
import { membershipFirstFAQs, membershipSecondFAQs } from 'common/static/faqs';
import withMetadata from 'common/hoc/withMetadata';
import staticContent from 'common/static/content.json';
import dhandsImage from 'assets/image/dh.jpg';

const { title, description } = staticContent.meta.membership;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    mb: '32px',
  },
  mediaBox: {
    position: 'relative',
    border: '3px solid #191819',
    borderRadius: '10px',
    maxWidth: 600,
    zIndex: 100,
    mb: '48px',
    overflow: 'hidden',
  },
  media: {
    width: '100%',
    height: 'auto',
    maxHeight: '230px',
    zIndex: 50,
  },
  faqs: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
  },
  faq: {
    maxWidth: { xs: '100%', md: '50%' },
    mb: { xs: '32px', md: '0' },
  },
};

const Membership = ({ handlePay }) => (
  <AppContainer size="lg" customStyles={styles.container}>
    <AnimatePresence>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        sx={styles.box}
      >
        <Card>
          <Box sx={styles.mediaBox}>
            <CardMedia sx={styles.media} src={dhandsImage} component="img" />
          </Box>
          <Form handlePay={handlePay} />
        </Card>
      </Box>
    </AnimatePresence>

    <Box sx={styles.faqs}>
      <FAQs dataFAQs={membershipFirstFAQs} customStyles={styles.faq} />
      <FAQs dataFAQs={membershipSecondFAQs} customStyles={styles.faq} />
    </Box>
  </AppContainer>
);

export default withMetadata({ title, description })(Membership);
