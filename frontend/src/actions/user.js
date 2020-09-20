import { createAction } from '@reduxjs/toolkit';

import api from '../services/api';
import {
  ADD_USER_SUCCESS,
  REMOVE_USER_SUCCESS,
  FETCH_USER_SUCCESS,
} from '../constants/index';

export const addUserSuccess = createAction(ADD_USER_SUCCESS);
export const removeUserSuccess = createAction(REMOVE_USER_SUCCESS);
export const fetchUsersSuccess = createAction(FETCH_USER_SUCCESS);


export const addUser = () => {
  return (dispatch, getState) => {
    api.post('/users').then((response) => {
      console.log('ok');
    });
  };
};

export const fetchUsers = () => {
  return (dispatch, getState) => {
    api.get('/users').then((response) => {
      console.log(response.data);
      dispatch(fetchUsersSuccess(response.data));
    });
  };
};


