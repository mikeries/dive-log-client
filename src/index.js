import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div id='wrapper'>
    <Provider store={store}>
        <App />
    </Provider>
  </div>,
  document.getElementById('root')
);

//registerServiceWorker();
