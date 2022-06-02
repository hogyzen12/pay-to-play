import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  message: '',
  severity: undefined,
  tx: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationOpened: (state, { payload }) => ({
      open: payload.open,
      message: payload.message,
      severity: payload.severity,
      tx: payload.tx,
    }),
    notificationClosed: () => initialState,
  },
});

export const { notificationOpened, notificationClosed } =
  notificationSlice.actions;

export default notificationSlice;
