import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
// import admin from "firebase-admin";
import { database, auth } from '../database';
import './Login.css';

export default class Login extends Component {

  constructor(){
    super();
    this.state={
      email: '',
      password: '',
      error: ''
    }
  }

  signIn () {
    const { email, password } = this.state
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
        console.log(error);
      });

    // this.props.logIn(this.state)
    this.setState({
      email: '',
      password: '',
      error: ''
    })

    // database.ref('users').once('value', snap => {
    //   const users = snap.val();
    //   const userArr = []
    //   userArr.push(users)
      // const validEmail = users.filter(userObj => {
      //   console.log(userObj.name)
      //   console.log(userObj)
      // })
      // database.ref('user').update(this.state);
    // })

  }

  render(){
    return (
      <div className="login-wrapper">
        <input className="input"
               placeholder="email"
               type="text"
               value={ this.state.email }
               onChange={(e) =>  this.setState({ email: e.target.value }) }
               />
        <input className="input"
               placeholder="password"
               type="password"
               value={ this.state.password }
               onChange={(e) =>  this.setState({ password: e.target.value }) }
               />
             <button className="btn" onClick={ () => this.signIn() }>Submit</button>
        <p>No account? <Link to='/register'>Register here.</Link></p>

      </div>
    )
  }

}
