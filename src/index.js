import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './toolbox/theme';
import store from './redux/store';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
