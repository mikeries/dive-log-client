import * as actions from './actionTypes' 

const initialState = {
  jwt: null
}

export default function sessionReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOG_IN:
      return Object.assign({}, state, {jwt: action.jwt})
    case actions.LOG_OUT:
      return Object.assign({}, state, initialState.jwt)
    default: 
      return state;
  }
}
