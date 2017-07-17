import * as actions from './actionTypes' 

const initialState = {
  loading: false,
  locations: null
}

export default function locationsReducer(state = initialState, action) {  
  switch(action.type) {
    case actions.LOADING_LOCATIONS:
      return Object.assign({}, state, {loading: true})
    case actions.UPDATING_LOCATIONS:
      let locations = Object.assign([], action.locations)
      //locations = locations.map(locations => Object.assign({}, locations))
      return Object.assign({}, state, {locations: locations, loading: false})
    default: 
      return state;
  }
}