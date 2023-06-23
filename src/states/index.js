import { configureStore } from '@reduxjs/toolkit';
import threadReducer from './thread/reducer';
import userReducer from './users/reducer';
import authUserReducer from './authUser/reducer';
import { preloadReducer } from './preload/reducer';
import { themeReducer } from './theme/reducer';

const store = configureStore({
  reducer: {
    thread: threadReducer,
    users: userReducer,
    authUser: authUserReducer,
    preload: preloadReducer,
    theme: themeReducer,
  },
});

export default store;
