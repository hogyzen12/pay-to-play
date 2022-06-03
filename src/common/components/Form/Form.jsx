import React from 'react';
import emailjs from '@emailjs/browser';
import { Controller, useForm } from 'react-hook-form';
import { Box, Typography, TextField, Button } from '@mui/material';
import { emailPattern, solscanUrl } from 'common/static/constants';
import { styles } from './Form.styles';
import staticContent from 'common/static/content.json';
import premiumUsers from 'common/static/premium.json';

const sha1 = require('sha1');
const { dhmt } = staticContent.pages.main;

const Form = ({ handlePayDHMT }) => {
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

  const findMemberByEmail = email => {
    return premiumUsers.find(user => user.Email === email);
  };

  const onSubmit = async ({ email }) => {
    if (!email) return;

    const member = await findMemberByEmail(email);
    await handlePayDHMT(null, dhmt, sha1(email), email, member);

    reset();
  };

  return (
    <>
      <Box sx={styles.form} onSubmit={handleSubmit(onSubmit)} component="form">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Enter your email address',
            pattern: {
              value: emailPattern,
              message: 'Please enter a valid email',
            },
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
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

      <Typography sx={styles.error}>{errors?.email?.message}</Typography>
    </>
  );
};

export default Form;
