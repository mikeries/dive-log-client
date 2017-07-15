
import * as actions from './actionTypes';
import sessionApi from '../Api/SessionApi';

export function loginUser(token) {
  sessionStorage.setItem('jwt', token);
  return {type: actions.LOG_IN_USER}
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: actions.LOG_OUT_USER}
}