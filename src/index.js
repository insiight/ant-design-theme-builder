import React from 'react';
import ReactDom from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

// ---- routes ----
import routes from './route';

// ---- others ----
import AppContainer from './comp.Main';

let history = useRouterHistory(createHistory)({
  basename: document.head.baseURI,
});

const rootRoute = Object.assign(routes, {
  path: '/',
  component: AppContainer,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/button/basic'),
  },
});

ReactDom.render(
  <Router history={history} routes={rootRoute} />,
  document.querySelector('#root')
);
