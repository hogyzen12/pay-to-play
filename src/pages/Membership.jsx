import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Controller, useForm } from 'react-hook-form';
import {
  Card,
  CardMedia,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
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
  form: {
    display: 'flex',
    gap: '10px',
    mb: '32px',
  },
  input: {},
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '', md: '10px 16px' },
    width: 'fit-content',
    border: theme => `1px solid ${theme.palette.success.main}`,
    '&:hover': {
      borderColor: '#FFF',
    },
  },
};

const Membership = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      email: '',
      inputValue: '',
    },
  });

  const onSubmit = ({ inputValue }) => {
    console.log('inputValue on button click -->', inputValue);

    /*
     * put your code here. InputValue is available after submit
     */
  };

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
            sx={styles.tickets}
          >
            <Card>
              <Box sx={styles.mediaBox}>
                <CardMedia
                  sx={styles.media}
                  component="img"
                  src={dhandsImage}
                />
              </Box>

              <Box
                sx={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                component="form"
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Your email"
                      sx={styles.input}
                    />
                  )}
                />
                <Controller
                  name="inputValue"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Text Value"
                      sx={styles.input}
                    />
                  )}
                />

                <Button sx={styles.btn} variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </Card>
          </Box>
        </AnimatePresence>

        <FAQs dataFAQs={raffleFAQs} />
      </AppContainer>
    </>
  );
};

export default Membership;
