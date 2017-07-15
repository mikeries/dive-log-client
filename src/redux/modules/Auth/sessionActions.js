import * as actions from './actionTypes';

export function loginUser(token) {
  sessionStorage.setItem('jwt', token);
  return {type: actions.LOG_IN}
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: actions.LOG_OUT}
}