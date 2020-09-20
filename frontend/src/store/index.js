
import { createStore, applyMiddleware } from 'redux';
import {allReducers} from '../reducers/index'
// import { configureStore } from '@reduxjs/toolkit';
// import { reducerUsers } from '../reducers/users';
// import { authReducer } from '../reducers/auth';
// import { reducerBag } from '../reducers/bag';

const store = createStore(allReducers)

// const store = configureStore({
//   reducer: {
//     user: reducerUsers,
//     auth: authReducer,
//     bag: reducerBag
//   },
// });

export default store;
