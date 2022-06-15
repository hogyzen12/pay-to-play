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
import forex from 'assets/image/cards/forex.png';

const { title, description } = staticContent.meta.forex;

const New3 = ({ styles }) => (
  <>
    <CardMedia sx={{ mb: '24px' }} src={forex} component="img" />
  </>
);

export default withPresence({ title, description })(New3);
