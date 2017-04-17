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
    const { email, password, name } = this.state
    const updateErrorInState = (errorMessage) => { this.setState({ error: errorMessage }) }

    auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        const { uid } = user
        const userObj = {
          [uid]: {
            name: this.state.name
          }
        }
        database.ref('users').push().set(userObj)
        this.props.logIn(userObj)
        history.push('/')
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        updateErrorInState(errorMessage)
      });
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
