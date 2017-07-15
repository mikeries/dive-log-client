import * as actions from './actionTypes' 

const initialState = {
  token: null,
  errors: []
}

export default function sessionReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOG_IN:
      return state; // for now...
    case actions.LOG_OUT:
      return state;
    default: 
      return state;
  }
}
