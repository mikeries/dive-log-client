
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const reducers = combineReducers({

});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares), 
)