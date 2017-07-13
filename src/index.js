import React from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory } from 'react-router';

// ---- routes ----
import routes from './route';

// ---- others ----
import AppContainer from './comp.Main';

const rootRoute = Object.assign(routes, {
  path: '/',
  component: AppContainer,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/button'),
  },
});

ReactDom.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.querySelector('#root')
);
