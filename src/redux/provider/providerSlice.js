import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  provider: null,
  providerPubKey: null,
  transferTokenStatus: false,
  transactionSignature: '',
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
    setTransferTokenStatus: (state, action) => ({
      ...state,
      transferTokenStatus: action.payload,
    }),
    setTransactionSignature: (state, action) => ({
      ...state,
      transactionSignature: action.payload,
    }),
  },
});

export const {
  setProvider,
  setProviderPubKey,
  setTransferTokenStatus,
  setTransactionSignature,
} = providerSlice.actions;

export default providerSlice;
