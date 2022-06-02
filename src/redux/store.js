import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { logger } from './middleware';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    logger,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
