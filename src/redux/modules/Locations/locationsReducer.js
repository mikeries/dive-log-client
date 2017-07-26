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

    default: 
      return state;
  }
}