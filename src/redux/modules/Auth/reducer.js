import * as actions from './actionTypes' 

const initialState = {
  jwt: null,
  loading: false,
  user_id: null
}

export default function sessionReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_USER:
      return Object.assign({}, state, {loading: true})
    case actions.LOG_IN:
      return Object.assign({}, state, {jwt: action.jwt})
    case actions.LOG_OUT:
      return Object.assign({}, state, initialState.jwt)
    default: 
      return state;
  }
}
