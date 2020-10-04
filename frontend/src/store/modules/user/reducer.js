import { Reducer } from 'redux';
import produce from 'immer';
import api from '../../../services/api';
const INITIAL_STATE = {
  idUser: null,
  username: null,
  name: null,
  email: null,
  senha: null,
  cpf: null,
  telefone: null,
  idImage: null,
  picpay: null,
  rating: null,
  interestCategories: null,
  reason: null,
};
const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_LOGIN': {
      const { user } = action.payload;
      return user;
    }
    case 'USER_LOGOUT': {
      return INITIAL_STATE;
    }
    case 'USER_SIGNUP': {
      const { user } = action.payload;
      return user;
    }
    case 'USER_UPDATE': {
      const { user } = action.payload;
      return user;
    }
    default: {
      return state;
    }
  }
};

export default user;
