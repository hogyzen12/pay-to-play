import React from 'react';
import { Box, Typography } from '@mui/material';
import { Accordion } from 'common/components';
import { styles } from './FAQs.styles';

const FAQs = ({ dataFAQs, customStyles = {} }) => {
  return (
    <Box sx={{ ...styles.faq, ...customStyles }}>
      <Typography sx={styles.title}>{dataFAQs.title}</Typography>

      {dataFAQs.items.map(({ title, description, id, archive }) => (
        <Accordion
          id={id}
          key={id}
          title={title}
          archive={archive}
          description={description}
        />
      ))}
    </Box>
  );
};

export default FAQs;
