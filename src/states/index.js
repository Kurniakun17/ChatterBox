import { configureStore } from '@reduxjs/toolkit';
import threadReducer from './thread/reducer';
import userReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import { preloadReducer } from './preload/reducer';
import { themeReducer } from './theme/reducer';
import detailThreadReducer from './detailThread/reducer';

const store = configureStore({
  reducer: {
    thread: threadReducer,
    users: userReducer,
    authUser: authUserReducer,
    preload: preloadReducer,
    theme: themeReducer,
    detailThread: detailThreadReducer
  },
});

export default store;
