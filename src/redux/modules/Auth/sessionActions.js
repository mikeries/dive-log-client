import * as actions from './actionTypes';
import services from '../Api/api_services';
import { NOOP } from '../../../constants';

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

export function facebookLogin(fbToken, uid, errorHandler = NOOP) {
  const data = {
    token: fbToken,
    uid: uid
  }
  return dispatch => {
    dispatch({ type: actions.LOADING_USER });
    return services.exchangeFbTokenForJWT({ data })
      .catch(errors => errorHandler(errors))
      .then(({ jwt, user }) => {
        sessionStorage.setItem('jwt', jwt);
        dispatch({ type: actions.UPDATE_USER, user })
      });
  }
}

export function logoutUser(router) {
  sessionStorage.removeItem('jwt');
  router.history.push('/');
  return { type: actions.LOG_OUT };
}