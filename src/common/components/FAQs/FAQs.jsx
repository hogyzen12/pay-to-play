import React from 'react';
import { Box, Typography } from '@mui/material';
import { Accordion } from 'common/components';
import { styles } from './FAQs.styles';

const FAQs = ({ dataFAQs }) => {
  return (
    <Box sx={styles.faq}>
      <Typography sx={styles.title}>{dataFAQs.title}</Typography>

      {dataFAQs.items.map(({ title, description, id }) => (
        <Accordion key={id} id={id} title={title} description={description} />
      ))}
    </Box>
  );
};

export default FAQs;
