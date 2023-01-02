import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../feature/counter/counterSlice';

export const store = configureStore({
  reducer: {
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
