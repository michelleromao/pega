import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './modules/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
