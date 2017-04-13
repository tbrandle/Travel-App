import React, { Component } from 'react';

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

  signIn () {
    this.props.logIn(this.state)
    this.setState({
      email: '',
      password: '',
      name:'',
      error: ''
    })
  }

  render(){
    return (
      <div>
        <input placeholder="name" type="text" onChange={(e)=> this.setState({name: e.target.value})} value={ this.state.name } />
        <input placeholder="email" type="text" onChange={(e)=> this.setState({email: e.target.value})} value={ this.state.email } />
        <input placeholder="password" type="password" onChange={(e)=> this.setState({password: e.target.value})} value={ this.state.password } />
        <button onClick={ () => this.signIn() }>Submit</button>
      </div>
    )
  }
}
