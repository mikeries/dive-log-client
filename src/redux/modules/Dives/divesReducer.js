import * as actions from './actionTypes' 
import { DELETE_LOCATION_SUCCESSFUL } from '../Locations/actionTypes';

const initialState = {
  dives: null,
  errors: null
};

export default function divesReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.RESET_ERRORS:
      return { ...state, errors: null };

    case actions.LOADING_DIVES_LIST:
      return state;

    case actions.ADDING_DIVES_LIST:
      return { ...state, dives: action.dives };

    case actions.UPDATING_DIVE:
      return state;
      
    case actions.DIVE_PATCH_SUCCESSFUL:
      let dives = state.dives.map(dive => 
        dive.id === action.dive.id ? action.dive : dive
      );
      return { ...state, dives: dives };

    case actions.DIVE_PATCH_FAILED:
      return { ...state, errors: action.errors };
    
    case actions.CREATING_DIVE:
      return state;

    case actions.CREATE_DIVE_SUCCESSFUL:
      dives = state.dives.concat(action.dive);
      return { ...state, dives: dives };

    case actions.CREATE_DIVE_FAILED:
      return { ...state, errors: action.errors };

    case actions.DELETE_DIVE:
      return state;

    case actions.DELETE_DIVE_SUCCESSFUL:
      dives = state.dives.filter(dive => dive.id !== action.diveId);
      return { ...state, dives: dives };

    case actions.DELETE_DIVE_FAILED:
      return { ...state, errors: action.errors };

    case DELETE_LOCATION_SUCCESSFUL:
      dives = state.dives.filter(dive => dive.location.id !== action.locationId);
      return { ...state, dives: dives };

    default: 
      return state;
  }
}