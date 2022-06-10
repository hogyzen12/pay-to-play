import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ChoiceCard } from 'common/components';
import { styles } from './ArticleList.styles';

const ArticlesList = ({ articles, handlePay }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...styles.column,
        [theme.breakpoints.up(1200)]: {
          overflowY: articles.length > 3 ? 'scroll' : '',
        },
      }}
    >
      {articles.map((article, index) => (
        <ChoiceCard
          key={index}
          card={article}
          handlePay={handlePay}
          customStyles={styles.card}
        />
      ))}
    </Box>
  );
};

export default ArticlesList;
