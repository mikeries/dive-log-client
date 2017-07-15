import * as actions from './actionTypes' 

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  currentUser: {},
  token: null,
  errors: []
}

export default function sessionReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOG_IN:
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}
