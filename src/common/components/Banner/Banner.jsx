import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia } from '@mui/material';
import { items } from 'common/static/slides';
import { styles } from './Banner.styles';

const Banner = () => {
  return (
    <Carousel
      sx={styles.banner}
      autoPlay
      height={500}
      timeout={500}
      animation="fade"
      cycleNavigation
    >
      {items.map((item, index) => (
        <Card key={index}>
          <CardMedia sx={styles.image} image={item.img} component="img" />
        </Card>
      ))}
    </Carousel>
  );
};

export default Banner;
