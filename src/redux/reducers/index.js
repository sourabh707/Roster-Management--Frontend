import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import rosterReducer from './rosterReducer';
import attendanceReducer from './attendanceReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  roster: rosterReducer,
  attendance: attendanceReducer,
});

export default rootReducer;
