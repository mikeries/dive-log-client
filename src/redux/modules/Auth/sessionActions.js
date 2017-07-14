
import * as types from './actionTypes';
import sessionApi from '../Api/SessionApi';

export function loginSuccess() {
  return {type: types.LOG_IN_SUCCESS}
}

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: types.LOG_OUT}
}