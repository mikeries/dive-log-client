import * as actions from './actionTypes';
import services from '../Api/api_services'

export function fetchDives(jwt) {
  return (dispatch) => {
    dispatch({type: actions.LOADING_DIVES});
    return services.get('/dives', jwt)
          .then(dives => dispatch(
            { type: actions.UPDATING_DIVES, dives }
          ));
  }
}
