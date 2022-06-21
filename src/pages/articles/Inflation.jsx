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

const { title, description } = staticContent.meta.inflation;

const Inflation = ({ styles }) => (
  <>
    <CardMedia
      sx={{ mb: '24px' }}
      src="https://www.cryptonary.com/wp-content/uploads/2022/06/Without-other-ballons.png"
      component="img"
    />
  </>
);

export default withPresence({ title, description })(Inflation);
