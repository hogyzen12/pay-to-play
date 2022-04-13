import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import { staticContent } from 'common/static/content';
import AppContainer from 'common/layout/AppContainer';

const { title, description } = staticContent.meta.discount;

const Discount = () => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <AppContainer>Discount</AppContainer>
    </>
  );
};

export default Discount;
