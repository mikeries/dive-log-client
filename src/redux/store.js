
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './modules/Auth/reducer'

const middlewares = [thunk];
const reducers = combineReducers({
  sessionReducer
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares), 
)