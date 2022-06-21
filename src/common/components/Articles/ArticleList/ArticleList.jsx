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
        [theme.breakpoints.up('xl')]: {
          overflowY: articles.length > 3 ? 'scroll' : '',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
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
