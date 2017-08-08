import * as actions from './actionTypes';
import services from '../Api/api_services';
import { LOCATIONS_ROOT } from '../../../constants';

export function resetErrors() {
  return {type: actions.RESET_ERRORS}
}

export function fetchLocations(jwt) {
  return dispatch => {
    dispatch({ type: actions.LOADING_LOCATIONS });
    return services.get(`${LOCATIONS_ROOT}`)
      .then(locations => dispatch(
        { type: actions.UPDATING_LOCATIONS, locations }
      ));
  }
}

export function updateLocation(location, history) {
  return dispatch => {
    dispatch({ type: actions.UPDATING_LOCATION });
    return services.patch(`${LOCATIONS_ROOT}/${location.id}`, location)
      .then( () => {
        history.push(`${LOCATIONS_ROOT}`);
        dispatch({ type: actions.LOCATION_PATCH_SUCCESSFUL, location});
      })
      .catch(errors => {
        dispatch({ type: actions.LOCATION_PATCH_FAILED, errors });
      }
    );
  }
}

export function newLocation(location, history) {
  return dispatch => {
    dispatch({ type: actions.CREATING_LOCATION });
    return services.post(`${LOCATIONS_ROOT}`, location)
      .then(location => { 
        history.push(`${LOCATIONS_ROOT}`);
        dispatch({ type: actions.CREATE_LOCATION_SUCCESSFUL, location });
      })
      .catch(errors => dispatch({ 
        type: actions.CREATE_LOCATION_FAILED, 
        errors
      }));
  }
}

export function deleteLocation(locationId) {
  return dispatch => {
    dispatch({ type: actions.DELETE_LOCATION });
    return services.delete(`${LOCATIONS_ROOT}/${locationId}`)
      .then(location => dispatch({
        type: actions.DELETE_LOCATION_SUCCESSFUL,
        locationId: locationId
      }))
      .catch(errors => dispatch({ 
        type: actions.DELETE_LOCATION_FAILED, 
        errors
      }));
  }
}

