import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { ArticlesList, ArticlePanel } from 'common/components';
import { articles } from 'common/static/articles';

const ArticleTabs = ({ handlePay }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ maxWidth: '90vw' }}>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={value}
          onChange={handleChange}
        >
          <Tab label="category_A" />
          <Tab label="category_B" />
          <Tab label="category_C" />
          <Tab label="category_D" />
        </Tabs>
      </Box>
      <Box sx={{ p: '32px 0' }}>
        <ArticlePanel value={value} index={0}>
          <ArticlesList articles={articles.categoryA} handlePay={handlePay} />
        </ArticlePanel>
        <ArticlePanel value={value} index={1}>
          <ArticlesList articles={articles.categoryB} handlePay={handlePay} />
        </ArticlePanel>
        <ArticlePanel value={value} index={2}>
          <ArticlesList articles={articles.categoryC} handlePay={handlePay} />
        </ArticlePanel>
        <ArticlePanel value={value} index={3}>
          <ArticlesList articles={articles.categoryD} handlePay={handlePay} />
        </ArticlePanel>
      </Box>
    </>
  );
};

export default ArticleTabs;
