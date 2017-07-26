import * as actions from './actionTypes' 

const initialState = {
  jwt: null,
  user: null
}

export default function sessionReducer(state = initialState, action) {
  switch(action.type) {
    case actions.LOADING_USER:
      return state;

    case actions.UPDATE_USER:
      return { ...state, user: action.user };

    case actions.LOG_IN:
      return { ...state, jwt: action.token };

    case actions.LOG_OUT:
      return { ...state, initialState };

    default: 
      return state;
  }
}
