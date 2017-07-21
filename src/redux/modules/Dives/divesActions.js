import * as actions from './actionTypes';
import services from '../Api/api_services'

export function resetErrors() {
  return {type: actions.RESET_ERRORS}
}

export function fetchDives() {
  return (dispatch) => {
    dispatch({type: actions.LOADING_DIVES_LIST});
    return services.get('/dives')
      .then(dives => dispatch({ 
        type: actions.ADDING_DIVES_LIST, 
        dives 
      }));
  }
}

export function updateDive(dive, history) {
  return (dispatch) => {
    dispatch({type: actions.UPDATING_DIVE});
    return services.patch(`/dives/${dive.id}`, dive)
      .then( () => {
        history.push('/dives');
        dispatch({ type: actions.DIVE_PATCH_SUCCESSFUL, dive});
      })
      .catch(errors => {
        dispatch({ type: actions.DIVE_PATCH_FAILED, errors });
      })
  }
}

export function newDive(dive, history) {
  return (dispatch) => {
    dispatch({type: actions.CREATING_DIVE});
    return services.post(`/dives`, dive)
      .then(dive => { 
        history.push('/dives');
        dispatch({ type: actions.CREATE_DIVE_SUCCESSFUL, dive });
      })
      .catch(errors => dispatch({ 
        type: actions.CREATE_DIVE_FAILED, 
        errors
      }))
  }
}

export function deleteDive(diveId) {
  return (dispatch) => {
    dispatch({type: actions.DELETE_DIVE});
    return services.delete(`/dives/${diveId}`)
      .then(dive => dispatch({
        type: actions.DELETE_DIVE_SUCCESSFUL,
        diveId: diveId
      }))
      .catch(errors => dispatch({ 
        type: actions.DELETE_DIVE_FAILED, 
        errors
      }))
  }
}
