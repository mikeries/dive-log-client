import * as actions from './actionTypes';

const initialState = {
  locations: null
};

export default function locationsReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_LOCATIONS:
      return state;

    case actions.UPDATING_LOCATIONS:
      return { ...state, locations: action.locations };

    case actions.RESET_ERRORS:
      return { ...state, errors: null };

    case actions.UPDATING_LOCATION:
      return state;
      
    case actions.LOCATION_PATCH_SUCCESSFUL:
      let locations = state.locations.map(location => 
        location.id === action.location.id ? action.location : location
      );
      return { ...state, locations: locations };

    case actions.LOCATION_PATCH_FAILED:
      return { ...state, errors: action.errors };
    
    case actions.CREATING_LOCATION:
      return state;

    case actions.CREATE_LOCATION_SUCCESSFUL:
      locations = state.locations.concat(action.location);
      return { ...state, locations: locations };

    case actions.CREATE_LOCATION_FAILED:
      return { ...state, errors: action.errors };

    case actions.DELETE_LOCATION:
      return state;

    case actions.DELETE_LOCATION_SUCCESSFUL:
      locations = state.locations.filter(location => location.id !== action.locationId);
      return { ...state, locations: locations };

    case actions.DELETE_LOCATION_FAILED:
      return { ...state, errors: action.errors };

    default: 
      return state;
  }
}