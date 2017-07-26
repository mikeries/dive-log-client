import * as actions from './actionTypes';
import services from '../Api/api_services';
import { LOCATIONS_ROOT } from '../../../constants';

export function fetchLocations(jwt) {
  return dispatch => {
    dispatch({ type: actions.LOADING_LOCATIONS });
    return services.get(`${LOCATIONS_ROOT}`, jwt)
      .then(locations => dispatch(
        { type: actions.UPDATING_LOCATIONS, locations }
      ));
  }
}
