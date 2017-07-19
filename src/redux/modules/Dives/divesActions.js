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
      .then( () => dispatch({
        type: actions.DIVE_PATCH_SUCCESSFUL
      }))
  }
}

export function newDive(jwt,dive) {
  return (dispatch) => {
    dispatch({type: actions.CREATING_DIVE});
    return services.post(`/dives`, jwt, dive)
      .then(dive => dispatch({
        type: actions.CREATE_DIVE_SUCCESSFUL,
        dive
      }))
  }
}

export function deleteDive(jwt,diveId) {
  return (dispatch) => {
    dispatch({type: actions.DELETE_DIVE});
    return services.delete(`/dives/${diveId}`, jwt)
      .then(dive => dispatch({
        type: actions.DELETE_DIVE_SUCCESSFUL,
        diveId: diveId
      }))
  }
}
