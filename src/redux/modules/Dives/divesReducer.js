import * as actions from './actionTypes' 

const initialState = {
  loading: false,
  dives: null
}

export default function divesReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_DIVES:
      return Object.assign({}, state, {loading: true})
    case actions.UPDATING_DIVES:
      let dives = Object.assign([], action.dives)
      //dives = dives.map(dive => Object.assign({}, dive))
      return Object.assign({}, state, {dives: dives, loading: false})
    default: 
      return state;
  }
}