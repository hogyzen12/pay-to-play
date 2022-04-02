import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './Answer.styles';

const Answer = ({ number, question, answer = '-----' }) => {
  return (
    <Box sx={styles.item} component="li">
      <Typography sx={styles.number} component="span">
        {number}.
      </Typography>
      <Typography sx={styles.answer} component="span">
        {answer}
      </Typography>
      <Typography sx={styles.question} component="span">
        {question}
      </Typography>
    </Box>
  );
};

export default Answer;
