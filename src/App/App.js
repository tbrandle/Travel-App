import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link }             from 'react-router-dom';

import './App.css';
import LoginContainer from '../Login/LoginContainer';
import NewUserContainer from '../NewUser/NewUserContainer';
import AddItineraryContainer from '../AddItinerary/AddItineraryContainer';
import ItineraryWrapper from '../ItineraryWrapper/ItineraryWrapper';
import SingleItineraryContainer from '../SingleItinerary/SingleItineraryContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import { database, auth } from '../database';

  // import GoogleMapReact from 'google-map-react';

export default class App extends Component {

  // if there is no this.state.user is empty, render Login
  // once logged in, if user interests is empty, render interests component
  // if there is a user with interests, render home page
  // database.ref('itineraries').push().set(this.state)


  componentDidMount(){
      console.log("app compdid mount fetch");
      database.ref('itineraries').on("value", (snapshot) => {
        const itineraries = snapshot.val()
        Object.keys(itineraries).map(key => this.props.retrieveItineraries(itineraries[key]));
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  }

  signOut(){
    auth.signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });

    this.props.logOut()
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <Link to='/' className="logo"><h1 className="logo">TravelMe</h1></Link>
          <Link to='/view_itineraries' className="nav-item"><h1>view</h1></Link>
          <Link to='/add_itinerary' className="nav-item"><h1>add</h1></Link>
          <Link to='/login' className="nav-item"><button onClick={()=> this.signOut()}>Logout</button></Link>

        </header>

        <Route exact path='/' component={ ProfileContainer }/>
        <Route exact
               path='/view_itineraries'
               render={() => <ItineraryWrapper itineraries={this.props.itineraries}/>}
               />
        <Route path='/view_itineraries/:id'
               render={({match}) => <SingleItineraryContainer match={match} /> }
               />
        <Route path='/add_itinerary'  component={ AddItineraryContainer } />
        <Route path='/login'  component={ LoginContainer } />
        <Route path='/register'  component={ NewUserContainer } />

      </div>
    );
  }
}


// Google Places Autocomplete URL:
// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=[ *** whatever input here *** ]&types=geocode&key=AIzaSyALUflE7VDZS-iVv5V0tOq2UnsuCRpI2jY
