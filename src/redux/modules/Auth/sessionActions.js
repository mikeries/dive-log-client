import * as actions from './actionTypes';
import services from '../Api/api_services'
import { NOOP } from '../../../constants'

export function fetchUser(errorHandler = NOOP) {
  return dispatch => {
    dispatch({ type: actions.LOADING_USER });
    return services.get('/user/current_user')
      .catch(errors => errorHandler(errors))
      .then(user => 
        dispatch({ type: actions.UPDATE_USER, user })
      );
  }
}

export function facebookLogin(fbToken, errorHandler = NOOP) {
  console.log('facebook token:',fbToken)
  return dispatch => {
    dispatch({ type: actions.LOADING_FACEBOOK_USER });
    return services.post('/auth/facebook_user')
      .catch(errors => errorHandler(errors))
      .then(user => 
        dispatch({ type: actions.UPDATE_FACEBOOK_USER, user })
      );
  }
}

export function loginUser(jwt = null) {
  if (jwt) sessionStorage.setItem('jwt', jwt);
  else sessionStorage.removeItem('jwt');

  return { type: actions.LOG_IN, token: jwt };
}

export function logoutUser(router) {
  sessionStorage.removeItem('jwt');
  router.history.push('/');
  return { type: actions.LOG_OUT };
}