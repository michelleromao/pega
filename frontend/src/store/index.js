import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducerUsers } from '../reducers/users';
import { authReducer } from '../reducers/auth';

const store = configureStore({
  reducer: {
    user: reducerUsers,
    auth: authReducer,
  },
});

export default store;
