import * as actions from './actionTypes';

export function loginUser(jwt = null) {
  if (jwt) sessionStorage.setItem('jwt', jwt);
  else sessionStorage.removeItem('jwt');
  return {type: actions.LOG_IN, token: jwt}
}

export function logoutUser(router) {
  sessionStorage.removeItem('jwt');
  router.history.replace('/')
  return {type: actions.LOG_OUT}
}