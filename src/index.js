import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import * as firebase from 'firebase';


/******** redux ********/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';

 /******* router *********/
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

/******* files *********/
import { user, itineraries } from './reducers';

import AppContainer from './App/AppContainer.js';
import './index.css';

const config = {
    apiKey: "AIzaSyA-BIWbCv_RZswQ2mPpXb1iGYUQLMunS1I",
    authDomain: "travel-app-sch-1491500719051.firebaseapp.com",
    databaseURL: "https://travel-app-sch-1491500719051.firebaseio.com",
    projectId: "travel-app---sch-1491500719051",
    storageBucket: "travel-app---sch-1491500719051.appspot.com",
    messagingSenderId: "722898624860"
  };

firebase.initializeApp(config)

const history = createHistory();
const middleWare = routerMiddleware(history)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();




const root = combineReducers({
  user,
  itineraries,
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

render(router, document.getElementById('root'));
