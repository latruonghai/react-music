import { configureStore } from '@reduxjs/toolkit';
import playerSlice from './player';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    player: playerSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
