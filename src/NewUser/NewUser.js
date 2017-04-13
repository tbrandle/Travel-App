import React, { Component } from 'react';
import { database, auth } from '../database';


export default class NewUser extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      email: '',
      password: '',
      error: ''
    }
  }

  newRegister () {
    const { history } = this.props
    const { email, password } = this.state

    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    // database.ref('users').push(this.state);

    this.setState({
      email: '',
      password: '',
      name:'',
      error: ''
    })
    // history.push('/login')
  }

  render(){
    return (
      <div>
        <input placeholder="name" type="text" onChange={(e)=> this.setState({name: e.target.value})} value={ this.state.name } />
        <input placeholder="email" type="text" onChange={(e)=> this.setState({email: e.target.value})} value={ this.state.email } />
        <input placeholder="password" type="password" onChange={(e)=> this.setState({password: e.target.value})} value={ this.state.password } />
        <button onClick={ () => this.newRegister() }>Submit</button>
      </div>
    )
  }
}
