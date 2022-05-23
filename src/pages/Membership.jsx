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

const sha1 = require('sha1');

const { dhmt } = staticContent.pages.main;
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
  form: {
    position: 'relative',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: '10px',
    mb: '4px',
  },
  input: {
    width: '100%',
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '10px 16px', md: '10px 24px' },
    width: { xs: '100%', md: 'fit-content' },
    background: 'linear-gradient(90deg, #FBC7D4 0%, #9796F0 100%), #4AAF47',
    border: 'none',
    color: '#000',
    minHeight: '56px',
    minWidth: { md: '150px' },
  },
  error: { color: 'red', height: '25px' },
};

const Membership = ({ handlePayDHMT }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    validate: ['onSubmit'],
    revalidate: ['onSubmit', 'onBlur'],
    defaultValues: {
      email: '',
    },
  });

  const stringToHash = string => {
    let hash = 0;

    if (string.length === 0) return hash;

    for (let i = 0; i < string.length; i++) {
      let char = string.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }

    return hash;
  };

  const onSubmit = ({ email }) => {
    console.log('email', email);

    const hashInteger = stringToHash(email); // 1381219982
    const hashString = sha1(email); // d69d400a821e8881d85a4ce9f29665ff5215d6bc

    console.log('hashInteger', hashInteger);
    console.log('hashString', hashString);

    handlePayDHMT(null, dhmt, hashString);

    reset();
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
            sx={styles.box}
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
                  defaultValue=""
                  rules={{
                    required: 'Enter your email address',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Please enter a valid email',
                    },
                  }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Email address"
                      sx={styles.input}
                      InputLabelProps={{
                        style: { color: '#A2A2A2' },
                      }}
                      inputProps={{ sx: { color: '#fff' } }}
                      error={!!error}
                    />
                  )}
                />

                <Button sx={styles.btn} variant="contained" type="submit">
                  Submit
                </Button>
              </Box>

              <Typography sx={styles.error}>
                {errors?.email?.message}
              </Typography>
            </Card>
          </Box>
        </AnimatePresence>

        <FAQs dataFAQs={raffleFAQs} />
      </AppContainer>
    </>
  );
};

export default Membership;
