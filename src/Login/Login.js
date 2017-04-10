import React, { Component } from 'react';

export default class Login extends Component {

  constructor(){
    super();
    this.state={
      email: '',
      password: '',
      error: ''
    }
  }

  render(){
    return (
    <div>
      <input type="text"
             value={ this.state.email }
             onChange={(e) =>  this.setState({ email: e.target.value }) } />
      <input type="password"
             value={ this.state.password }
             onChange={(e) =>  this.setState({ password: e.target.value }) } />
      <button>Submit</button>
    </div>
    )
  }

}
