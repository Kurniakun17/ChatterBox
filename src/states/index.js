import { configureStore } from '@reduxjs/toolkit';
import threadReducer from './thread/reducer';
import userReducer from './users/reducer';
import authUserReducer from './authUser/reducer';

const store = configureStore({
  reducer: {
    thread: threadReducer,
    users: userReducer,
    authUser: authUserReducer,
  },
});

export default store;
