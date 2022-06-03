import { combineReducers } from '@reduxjs/toolkit';

import providerSlice from './provider/providerSlice';
import loaderSlice from './loader/loaderSlice';
import modalSlice from './modal/modalSlice';
import gameSlice from './game/gameSlice';
import notificationSlice from './notification/notificationSlice';

const rootReducer = combineReducers({
  [providerSlice.name]: providerSlice.reducer,
  [loaderSlice.name]: loaderSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [gameSlice.name]: gameSlice.reducer,
  [notificationSlice.name]: notificationSlice.reducer,
});

export default rootReducer;
