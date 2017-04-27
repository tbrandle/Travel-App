import React from 'react';
import { render } from 'react-dom';

/******** redux ********/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';

 /******* router *********/
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

/******* files *********/
import { currentUser, itineraries } from './reducers/reducers';

import AppContainer from './App/AppContainer.js';
import './index.css';

const history = createHistory();
const middleWare = routerMiddleware(history)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const root = combineReducers({
  currentUser,
  itineraries,
  router: routerReducer
})

const store = createStore(root, devTools, applyMiddleware(middleWare))

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('root'));
