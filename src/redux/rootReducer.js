import { combineReducers } from '@reduxjs/toolkit';

import loaderSlice from './loader/loaderSlice';
import modalSlice from './modal/modalSlice';
import providerSlice from './provider/providerSlice';

const rootReducer = combineReducers({
  [loaderSlice.name]: loaderSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [providerSlice.name]: providerSlice.reducer,
});

export default rootReducer;
