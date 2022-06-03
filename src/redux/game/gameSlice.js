import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameReset: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    gameResetActive: () => ({ gameReset: true }),
    gameResetDisabled: () => ({ gameReset: false }),
  },
});

export const { gameResetActive, gameResetDisabled } = gameSlice.actions;

export default gameSlice;
