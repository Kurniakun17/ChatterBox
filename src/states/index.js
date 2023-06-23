import { configureStore } from '@reduxjs/toolkit';
import threadsReducer from './threads/reducer';
import userReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import { preloadReducer } from './preload/reducer';
import { themeReducer } from './theme/reducer';
import detailThreadReducer from './detailThread/reducer';

const store = configureStore({
  reducer: {
    threads: threadsReducer,
    users: userReducer,
    authUser: authUserReducer,
    preload: preloadReducer,
    theme: themeReducer,
    detailThread: detailThreadReducer,
  },
});

export default store;
