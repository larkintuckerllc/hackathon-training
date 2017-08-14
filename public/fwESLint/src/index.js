import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './components/App';
import './lib/skeleton/css/normalize.css';
import './lib/skeleton/css/skeleton.css';

const store = configureStore();
ReactDOM.render(
  // eslint-disable-next-line
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
