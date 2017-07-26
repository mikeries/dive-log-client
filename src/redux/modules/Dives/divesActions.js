import * as actions from './actionTypes';
import { DIVES_ROOT } from '../../../constants'
import services from '../Api/api_services'

export function resetErrors() {
  return {type: actions.RESET_ERRORS}
}

export function fetchDives() {
  return dispatch => {
    dispatch({ type: actions.LOADING_DIVES_LIST });
    return services.get(`${DIVES_ROOT}`)
      .then(dives => dispatch({ 
        type: actions.ADDING_DIVES_LIST, 
        dives 
      })
    );
  }
}

export function updateDive(dive, history) {
  return dispatch => {
    dispatch({ type: actions.UPDATING_DIVE });
    return services.patch(`${DIVES_ROOT}/${dive.id}`, dive)
      .then( () => {
        history.push(`${DIVES_ROOT}`);
        dispatch({ type: actions.DIVE_PATCH_SUCCESSFUL, dive});
      })
      .catch(errors => {
        dispatch({ type: actions.DIVE_PATCH_FAILED, errors });
      }
    );
  }
}

export function newDive(dive, history) {
  return dispatch => {
    dispatch({ type: actions.CREATING_DIVE });
    return services.post(`${DIVES_ROOT}`, dive)
      .then(dive => { 
        history.push(`${DIVES_ROOT}`);
        dispatch({ type: actions.CREATE_DIVE_SUCCESSFUL, dive });
      })
      .catch(errors => dispatch({ 
        type: actions.CREATE_DIVE_FAILED, 
        errors
      }));
  }
}

export function deleteDive(diveId) {
  return dispatch => {
    dispatch({ type: actions.DELETE_DIVE });
    return services.delete(`${DIVES_ROOT}/${diveId}`)
      .then(dive => dispatch({
        type: actions.DELETE_DIVE_SUCCESSFUL,
        diveId: diveId
      }))
      .catch(errors => dispatch({ 
        type: actions.DELETE_DIVE_FAILED, 
        errors
      }));
  }
}
