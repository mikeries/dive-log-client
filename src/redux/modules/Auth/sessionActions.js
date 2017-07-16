import * as actions from './actionTypes';
import services from '../Api/api_services'

export function fetchUser(jwt) {
  return (dispatch) => {
    dispatch({type: actions.LOADING_USER});
    return services.get('/user/current_user', jwt)
          .then(user => dispatch(
            { type: actions.UPDATE_USER, user }
          ));
  }
}

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