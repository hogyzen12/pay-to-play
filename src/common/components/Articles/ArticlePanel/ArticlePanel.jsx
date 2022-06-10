import React from 'react';
import { Box } from '@mui/material';

const ArticlePanel = ({ children, value, index }) => (
  <Box hidden={value !== index}>{value === index && <Box>{children}</Box>}</Box>
);

export default ArticlePanel;
