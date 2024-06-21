import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import rosterReducer from './reducers/rosterReducer';
import attendanceReducer from './reducers/attendanceReducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    roster: rosterReducer,
    attendance: attendanceReducer,
  },
});

export  default store;