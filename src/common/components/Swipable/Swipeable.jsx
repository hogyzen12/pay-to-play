import React from 'react';
import { SwipeableDrawer } from '@mui/material';
import { styles } from './Swipeable.styles';

const Swipeable = ({ open, toggleDrawer, children }) => {
  const handleOpen = () => toggleDrawer(true);
  const handleClose = () => toggleDrawer(false);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      sx={styles.drawer}
      onOpen={handleOpen}
      onClose={handleClose}
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
