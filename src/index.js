import React, { Component } from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';


/******** redux ********/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';

 /******* router *********/
import { ConnectedRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

/******* files *********/
import AppContainer from './App/AppContainer.js';
import './index.css';

const history = createHistory();
const middleWare = routerMiddleware(history)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const root = combineReducers({
  router: routerReducer
})

const store = createStore(root, devTools, applyMiddleware(middleWare))
// console.log('inside router');

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history } >
      <Route path='/' component={ AppContainer } />
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));
