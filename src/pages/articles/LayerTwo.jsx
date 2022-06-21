import React from 'react';
import {
  CardMedia,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import staticContent from 'common/static/content.json';
import withPresence from 'common/hoc/withPresence';
import forex from 'assets/image/articles/forex.png';

const { title, description } = staticContent.meta.layer;

const LayerTwo = ({ styles }) => (
  <>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/NavBearMarket-1.jpg"
      component="img"
    />
  </>
);

export default withPresence({ title, description })(LayerTwo);
