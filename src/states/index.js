import { configureStore } from '@reduxjs/toolkit';
import threadReducer from './thread/reducer';

export const store = configureStore({
  reducer: {
    thread: threadReducer,
  },
});
