import * as actions from './actionTypes';
import services from '../Api/api_services'

export function fetchDives(jwt) {
  return (dispatch) => {
    dispatch({type: actions.LOADING_DIVES_LIST});
    return services.get('/dives', jwt)
          .then(dives => dispatch(
            { type: actions.ADDING_DIVES_LIST, dives }
          ));
  }
}

export function updateDive(jwt,dive) {
  return (dispatch) => {
    dispatch({type: actions.UPDATING_DIVE, dive});
    return services.patch(`/dives/${dive.id}`, jwt, dive)
      .then(dive => dispatch({
        type: actions.DIVE_PATCH_SUCCESSFUL
      }))
  }
}
