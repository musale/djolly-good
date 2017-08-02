import * as actionType from './types';

export const setToken = (token) => {
  return {
    type: actionType.SET_TOKEN,
    token: token
  }
}

export const setUsername = (username) => {
  return {
    type: actionType.SET_USERNAME,
    username: username.trim()
  }
}

export const setPassword = (password) => {
  return {
    type: actionType.SET_PASSWORD,
    password: password.trim()
  }
}
