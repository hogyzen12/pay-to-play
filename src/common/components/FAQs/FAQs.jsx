import React from 'react';
import { Box, Typography } from '@mui/material';
import { Accordion } from 'common/components';
import { styles } from './FAQs.styles';

const FAQs = ({ dataFAQs, customStyles = {} }) => (
  <Box sx={{ ...styles.faq, ...customStyles }}>
    {dataFAQs.title && (
      <Typography sx={styles.title}>{dataFAQs.title}</Typography>
    )}

    {dataFAQs.items.map(
      ({ title, description, id, archive, video, hyperlink }) => (
        <Accordion
          id={id}
          key={id}
          title={title}
          video={video}
          archive={archive}
          description={description}
          hyperlink={hyperlink}
        />
      ),
    )}
  </Box>
);

export default FAQs;
