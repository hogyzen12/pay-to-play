import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  provider: null,
  providerPubKey: null,
};

const providerSlice = createSlice({
  name: 'provider',
  initialState,
  reducers: {
    setProvider: (state, action) => ({ ...state, provider: action.payload }),
    setProviderPubKey: (state, action) => ({
      ...state,
      providerPubKey: action.payload,
    }),
  },
});

export const { setProvider, setProviderPubKey } = providerSlice.actions;

export default providerSlice;
