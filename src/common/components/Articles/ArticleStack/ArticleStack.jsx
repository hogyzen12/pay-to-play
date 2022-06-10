import React from 'react';
import { Stack } from '@mui/material';
import { ArticlesList } from 'common/components';
import { articles } from 'common/static/articles';

const ArticleStack = ({ handlePay }) => {
  return (
    <Stack direction="row" spacing={1}>
      <ArticlesList articles={articles.categoryA} handlePay={handlePay} />
      <ArticlesList articles={articles.categoryB} handlePay={handlePay} />
      <ArticlesList articles={articles.categoryC} handlePay={handlePay} />
      <ArticlesList articles={articles.categoryD} handlePay={handlePay} />
    </Stack>
  );
};

export default ArticleStack;
