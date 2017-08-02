import { combineReducers } from 'redux';
import * as actionType from '../actions/types';

const tokenInitialState = null;
const token = (state = tokenInitialState, action) => {
  switch(action.type) {
    case actionType.SET_TOKEN:
      return action.token;
    default:
      return state;
  }
}
const loginDataInitialState = {
  username: '',
  password: ''
}

const loginData = (state=loginDataInitialState, action) =>{
  let {username, password} = state;
  switch (action.type) {
    case action.SET_USERNAME:
      username = action.username;
      break;
    case action.SET_PASSWORD:
      password = action.password;
      break;
    default:
      return state
  }
  return {username, password}
}

const appReducer = combineReducers({
  token: token, loginData: loginData,
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
