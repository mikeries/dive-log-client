import * as actions from './actionTypes' 

const initialState = {
  dives: null
}

export default function divesReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_DIVES_LIST:
      return Object.assign({}, state);

    case actions.ADDING_DIVES_LIST:
      let dives = Object.assign([], action.dives);
      return Object.assign({}, state, {dives: dives});

    case actions.UPDATING_DIVE:
      dives = state.dives.map(dive => (
        dive.id === action.dive.id ? action.dive : dive
      ));
      return Object.assign({}, state, {dives: dives});

    case actions.DIVE_PATCH_SUCCESSFUL:
      return Object.assign({}, state);
    
    case actions.CREATING_DIVE:
      dives = state.dives.concat(action.dive);
      return Object.assign({}, state, {dives: dives});

    case actions.CREATE_DIVE_SUCCESSFUL:
      dives = state.dives.map(dive => (
        dive.id === 0 ? action.dive : dive
      ));
      return Object.assign({}, state, {dives: dives});

    default: 
      return state;
  }
}