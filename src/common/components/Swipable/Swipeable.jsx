import React from 'react';
import { SwipeableDrawer, Box, Typography } from '@mui/material';
import { styles } from './Swipeable.styles';

const Swipeable = ({ open, toggleDrawer, children }) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      sx={styles.drawer}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {children}
    </SwipeableDrawer>
  );
};

export default Swipeable;
