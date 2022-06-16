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
import deep from 'assets/image/articles/deep.png';

const { title, description } = staticContent.meta.forex;

const Deep = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={deep} component="img" />
  </>
);

export default withPresence({ title, description })(Deep);
