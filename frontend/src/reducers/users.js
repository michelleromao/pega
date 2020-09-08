import { createReducer } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import {
  addUserSuccess,
  removeUserSuccess,
  fetchUsersSuccess,
} from '../actions/user';

export const userInitialState = {
  user: [
    {
      id: null,
      username: null,
      name: null,
      email: null,
      cpf: null,
      tel: null,
      password: null,
      interestCategories: null,
      picpay: null,
      address: [
        {
          cep: null,
          street: null,
          number: null,
          neighboohood: null,
          city: null,
          state: null,
          principal: null,
        },
      ],
      announcements: [],
      favorite: [],
      buys: [],
      sales: [],
      sacola: {
        productsID: [],
        resume: {
          productsValue: 0,
          cupom: 0,
          total: 0,
        },
      },
    },
  ],
};

export const reducerUsers = createReducer(userInitialState, {
  [addUserSuccess]: (state, action) => {
    state.user.push({
      id: v4(),
      username: `${action.payload.name}${v4()}`,
      name: action.payload.name,
      email: action.payload.email,
      cpf: '',
      tel: '',
      password: action.payload.password,
      interestCategories: [],
      picpay: '',
      address: [
        {
          cep: '',
          street: '',
          number: '',
          neighboohood: '',
          city: '',
          state: '',
          principal: false,
        },
      ],
      announcements: [],
      favorite: [],
      buys: [],
      sales: [],
      sacola: {
        productsID: [],
        resume: {
          productsValue: 0,
          cupom: 0,
          total: 0,
        },
      },
    });
  },
  [removeUserSuccess]: (state, action) => {
    const index = state.user.findIndex((user) => user.id === action.payload.id);
    state.user.splice(index, 1);
  },
  [fetchUsersSuccess]: (state, action) => {
    state.users = action.payload;
  },
});
