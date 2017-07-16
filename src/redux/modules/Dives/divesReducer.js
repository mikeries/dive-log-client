import * as actions from './actionTypes' 

const initialState = {
  loading: false,
  dives: null
}

export default function divesReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_DIVES:
      return Object.assign({}, state, {loading: true})
    case actions.UPDATE_DIVES:
      console.log('Updating dives:', action)
      return Object.assign({}, state, {dives: action.dives, loading: false})
    default: 
      return state;
  }
}