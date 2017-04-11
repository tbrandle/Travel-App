import React, { Component } from 'react';
import { Link }             from 'react-router-dom';


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
    this.props.logIn(this.state)
    this.setState({
      email: '',
      password: '',
      error: ''
    })
  }

  render(){
    return (
      <div>
        <input type="text"
               value={ this.state.email }
               onChange={(e) =>  this.setState({ email: e.target.value }) }
               />
        <input type="password"
               value={ this.state.password }
               onChange={(e) =>  this.setState({ password: e.target.value }) }
               />
        <button onClick={ () => this.signIn() }>Submit</button>
        <p>No account? <Link to='/register'>Register here.</Link></p>

      </div>
    )
  }

}
