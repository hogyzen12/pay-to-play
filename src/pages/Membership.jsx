import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardMedia, Box } from '@mui/material';
import { Form } from 'common/components';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQs } from 'common/components';
import { raffleFAQs } from 'common/static/faqs';
import AppContainer from 'common/layout/AppContainer';
import staticContent from 'common/static/content.json';
import dhandsImage from 'assets/image/dh.png';

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
    maxWidth: 540,
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
};

const Membership = ({ handlePayDHMT }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer size="md" customStyles={styles.container}>
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
                <CardMedia
                  sx={styles.media}
                  src={dhandsImage}
                  component="img"
                />
              </Box>
              <Form handlePayDHMT={handlePayDHMT} />
            </Card>
          </Box>
        </AnimatePresence>

        <FAQs dataFAQs={raffleFAQs} />
      </AppContainer>
    </>
  );
};

export default Membership;
