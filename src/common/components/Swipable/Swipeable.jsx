import React from 'react';
import { Global } from '@emotion/react';
import { SwipeableDrawer, Box, Typography } from '@mui/material';
import { styles } from './Swipeable.styles';

const drawerBleeding = 27;

const Swipeable = ({ open, toggleDrawer, children }) => {
  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            // height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        sx={styles.drawer}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            bgcolor: '#141414',
            borderTop: '1px solid #404040',
            right: 0,
            left: 0,
          }}
        >
          <Typography sx={{ textAlign: 'center' }}>Pull</Typography>
        </Box>
        {children}
      </SwipeableDrawer>
    </>
  );
};

export default Swipeable;
