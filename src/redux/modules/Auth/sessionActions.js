import * as actions from './actionTypes';

export function loginUser(jwt = null) {
  if (jwt) sessionStorage.setItem('jwt', jwt);
  else sessionStorage.removeItem('jwt');
  return {type: actions.LOG_IN, token: jwt}
}

export function logOutUser() {
  console.log('logging out');
  sessionStorage.removeItem('jwt');
  return {type: actions.LOG_OUT}
}