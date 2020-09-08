import { createReducer } from '@reduxjs/toolkit';

import { login, logout } from '../actions/auth';
import { userInitialState } from './users';

const authInitialState = {
  loggendin: false,
};

export const authReducer = createReducer(userInitialState, {
  [login]: (state, action) => {
    state.loggendin = true;
  },
  [logout]: (state, action) => {
    state.loggendin = false;
  },
});
