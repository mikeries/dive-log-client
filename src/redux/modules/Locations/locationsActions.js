import * as actions from './actionTypes';
import services from '../Api/api_services'

export function fetchLocations(jwt) {
  return (dispatch) => {
    dispatch({type: actions.LOADING_LOCATIONS});
    return services.get('/locations', jwt)
          .then(locations => dispatch(
            { type: actions.UPDATING_LOCATIONS, locations }
          ));
  }
}
