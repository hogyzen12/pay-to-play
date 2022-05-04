import React from 'react';
import { Box, Typography } from '@mui/material';
import { Accordion } from 'common/components';
import { FAQsData } from 'common/static/faqs';
import { styles } from './FAQs.styles';

const FAQs = () => {
  return (
    <Box sx={styles.faq}>
      <Typography sx={styles.title}>{FAQsData.title}</Typography>

      {FAQsData.items.map(({ title, description, id }) => (
        <Accordion key={id} id={id} title={title} description={description} />
      ))}
    </Box>
  );
};

export default FAQs;
