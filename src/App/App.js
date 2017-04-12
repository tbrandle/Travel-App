import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link }             from 'react-router-dom';

import './App.css';
import LoginContainer from '../Login/LoginContainer';
import NewUserContainer from '../NewUser/NewUserContainer';
import MapWrapper from '../InitialMap/MapWrapper';
import AddItineraryContainer from '../AddItinerary/AddItineraryContainer';
import NewDestination from '../NewDestination/NewDestination'

// import GoogleMapReact from 'google-map-react';

export default class App extends Component {

  // if there is no this.state.user is empty, render Login
  // once logged in, if user interests is empty, render interests component
  // if there is a user with interests, render home page

  render() {
    return (
      <div className="App">
        <header>
          <Link to='/'><h1>Travel App</h1></Link>
        </header>

        <Route path='/itinerary' component={ AddItineraryContainer } />
        <Route path='/login' component={ LoginContainer } />
        <Route path='/register' component={ NewUserContainer } />

      </div>
    );
  }
}


// Google Places Autocomplete URL:
// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=[ *** whatever input here *** ]&types=geocode&key=AIzaSyALUflE7VDZS-iVv5V0tOq2UnsuCRpI2jY
