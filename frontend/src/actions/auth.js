import { createAction } from '@reduxjs/toolkit';
import { LOGOUT_SUCCESS, LOGIN_SUCCESS } from '../constants';
import api from '../services/api';

export const login = createAction(LOGIN_SUCCESS);
export const logout = createAction(LOGOUT_SUCCESS);

export const loginRequest = () => {
  return (dispatch, getState) => {
    api.get(`/users/`).then((response) => {
      dispatch(login(response.data));
    });
  };
};
