import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './app/containers/app';
import configureStore from './app/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.querySelector('.todoapp'));
