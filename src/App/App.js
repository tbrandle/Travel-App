import React, { Component } from 'react';
import './App.css';
import LoginContainer from '../Login/LoginContainer'

export default class App extends Component {

  // if there is no this.state.user is empty, render Login
  // once logged in, if user interests is empty, render interests component
  // if there is a user with interests, render home page

  signIn(){

  }

  render() {
    console.log('inside App');

    return (
      <div className="App">

        <LoginContainer />
      </div>
    );
  }
}
