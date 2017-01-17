import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';

import App from './app/containers/app';
import Information from './app/components/information';
import configureStore from './app/store/configureStore';

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

ReactDOM.render(
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={App}/>
      <Route path="information" component={Information}/>
    </Router>
  </Provider>
  , document.querySelector('.todoapp'));
