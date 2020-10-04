export function userLogin(user) {
  return {
    type: 'USER_LOGIN',
    payload: {
      user,
    },
  };
}

export function userLogout() {
  return {
    type: 'USER_LOGOUT',
    payload: {},
  };
}

export function userSignUp(user) {
  return {
    type: 'USER_SIGNUP',
    payload: {
      user,
    },
  };
}

export function userUpdate(user) {
  return {
    type: 'USER_UPDATE',
    payload: {
      user,
    },
  };
}
