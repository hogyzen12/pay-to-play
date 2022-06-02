import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    loaderActive: state => ({ ...state, isLoading: true }),
    loaderDisabled: state => ({ ...state, isLoading: false }),
  },
});

export const { loaderActive, loaderDisabled } = loaderSlice.actions;

export default loaderSlice;
