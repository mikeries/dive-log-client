import * as actions from './actionTypes' 

const initialState = {
  loading: false,
  dives: null
}

export default function divesReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_DIVES_LIST:
      return Object.assign({}, state, {loading: true})
    case actions.ADDING_DIVES_LIST:
      let dives = Object.assign([], action.dives)
      return Object.assign({}, state, {dives: dives, loading: false})
    default: 
      return state;
  }
}