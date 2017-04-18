import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

// add a boolean for authenticated user
const PrivateRoute = ({ itineraries, currentUser, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      Object.keys(currentUser).length ? (
        <Component {...props} itineraries={itineraries}/>
      ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )



export default PrivateRoute;
