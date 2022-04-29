import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import staticContent from 'common/static/content.json';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.discount;

const Discount = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>

    <AppContainer>
      <Box>Discount</Box>
    </AppContainer>
  </>
);

export default Discount;
