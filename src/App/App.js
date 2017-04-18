import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link, Redirect } from 'react-router-dom';
// import { Redirect } from 'react-router';


import './App.css';
import LoginContainer from '../Login/LoginContainer';
import NewUserContainer from '../NewUser/NewUserContainer';
import AddItineraryContainer from '../AddItinerary/AddItineraryContainer';
import ItineraryWrapper from '../ItineraryWrapper/ItineraryWrapper';
import SingleItineraryContainer from '../SingleItinerary/SingleItineraryContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import { database, auth } from '../database';

const PrivateRoute = ({currentUser, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      Object.keys(currentUser).length ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )}/>
    )

export default class App extends Component {

  componentDidMount(){
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

  toggleNavBar(){
    const {currentUser} = this.props
    if (Object.keys(currentUser).length) {
      return (
        <header className="header">
          <Link to='/' className="logo"><h1 className="logo">TravelMe</h1></Link>
          <Link to='/view_itineraries' className="nav-item"><h1>view</h1></Link>
          <Link to='/add_itinerary' className="nav-item"><h1>add</h1></Link>
          <Link to='/login' className="nav-item"><button onClick={()=> this.signOut()}>Logout</button></Link>
        </header>
      )
    }
  }


  render() {
    return (
      <div className="App">
        { this.toggleNavBar() }
        <PrivateRoute exact path='/'
          currentUser={ this.props.currentUser }
          component={ ProfileContainer }
          />
        
        <Route exact
               path='/view_itineraries'
               render={() => <ItineraryWrapper itineraries={this.props.itineraries}/>}
               />
        <Route path='/view_itineraries/:id'
               render={({match}) => <SingleItineraryContainer match={match} /> }
               />
        <Route path='/add_itinerary'  component={ AddItineraryContainer } />
        <Route exact path='/login'  component={ LoginContainer } />
        <Route path='/register'  component={ NewUserContainer } />
      </div>
    );
  }
}
