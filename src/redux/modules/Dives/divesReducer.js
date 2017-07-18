import * as actions from './actionTypes' 

const initialState = {
  loading: false,
  saving: false,
  dives: null
}

export default function divesReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_DIVES_LIST:
      return Object.assign({}, state, {loading: true})
    case actions.ADDING_DIVES_LIST:
      let dives = Object.assign([], action.dives)
      return Object.assign({}, state, {dives: dives, loading: false})
    case actions.UPDATING_DIVE:
      dives = state.dives.map(dive => (
        dive.id === action.dive.id ? action.dive : dive
      ));
      return Object.assign({}, state, {dives: dives, saving: true})
    case actions.DIVE_PATCH_SUCCESSFUL:
      return Object.assign({}, state, {saving: false})
    default: 
      return state;
  }
}