import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

import './App.css';
import LoginContainer from '../Login/LoginContainer';
import NewUserContainer from '../NewUser/NewUserContainer';
import AddItineraryContainer from '../AddItinerary/AddItineraryContainer';
import ItineraryWrapper from '../ItineraryWrapper/ItineraryWrapper';
import SingleItineraryContainer from '../SingleItinerary/SingleItineraryContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

import { database, auth } from '../database';


export default class App extends Component {

  componentDidMount(){
      database.ref('itineraries').on("value", (snapshot) => {
        const itineraries = snapshot.val()
        Object.keys(itineraries).map(key => this.props.retrieveItineraries(itineraries[key]));
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  }
  //
  // componentWillReceiveProps(nextProps){
  //   const updatedUser = nextProps.currentUser
  //   const uid = updatedUser.uid
  //   database.ref('users').update({[uid]:updatedUser})
  //
  // }

  signOut(){
    auth.signOut().then(function() {
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });

    this.props.logOut()
  }

  toggleNavBar(){
    const {currentUser} = this.props
    if (Object.keys(currentUser).length) {
      return (
        <header className="header">
          <Link className='link' to='/' ><h1 className="logo">TravelMe</h1></Link>
          <Link className='link' to='/view_itineraries'><h1 className="nav-item">view</h1></Link>
          <Link className='link' to='/add_itinerary' ><h1 className="nav-item">add</h1></Link>
          <Link className='link' to='/login'><button onClick={()=> this.signOut()}>Logout</button></Link>
        </header>
      )
    }
  }

  render() {
    return (
      <div className="App">
        { this.toggleNavBar() }

        <PrivateRoute exact path='/'
          component={ ProfileContainer }
          currentUser={this.props.currentUser}
          />

        <PrivateRoute exact path='/view_itineraries'
          currentUser={ this.props.currentUser }
          itineraries={this.props.itineraries}
          component={ ItineraryWrapper }
          />

        <PrivateRoute exact path='/add_itinerary'
          currentUser={ this.props.currentUser }
          component={ AddItineraryContainer }
          />

        <PrivateRoute exact path='/view_itineraries/:id'
          currentUser={ this.props.currentUser }
          component={ SingleItineraryContainer }
          />

        <Route exact path='/login'  component={ LoginContainer } />
        <Route path='/register'  component={ NewUserContainer } />

      </div>
    );
  }
}
