import * as types from './actionTypes' 

const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  currentUser: {},
  token: null,
  errors: []
}

export default function sessionReducer(state = initialState, action) {  
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
    console.log('Login success')
      return !!sessionStorage.jwt
    default: 
      return state;
  }
}
