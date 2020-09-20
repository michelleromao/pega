
import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducerUsers } from '../reducers/users';
import { authReducer } from '../reducers/auth';
import { reducerBag } from '../reducers/bag';

const store = configureStore({
  reducer: {
    user: reducerUsers,
    auth: authReducer,
    bag: reducerBag
  },
});

export default store;
