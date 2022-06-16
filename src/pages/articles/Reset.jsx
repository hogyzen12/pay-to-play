import React from 'react';
import {
  CardMedia,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import withPresence from 'common/hoc/withPresence';
import reset from 'assets/image/articles/reset.png';

const { title, description } = staticContent.meta.forex;

const Reset = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={reset} component="img" />
  </>
);

export default withPresence({ title, description })(Reset);
