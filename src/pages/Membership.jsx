import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Controller, useForm } from 'react-hook-form';
import { Box, Typography, TextField, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AppContainer from 'common/layout/AppContainer';
import staticContent from 'common/static/content.json';

const { title, description } = staticContent.meta.membership;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
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
            <Box
              sx={styles.form}
              onSubmit={handleSubmit(onSubmit)}
              component="form"
            >
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
          </Box>
        </AnimatePresence>
      </AppContainer>
    </>
  );
};

export default Membership;
