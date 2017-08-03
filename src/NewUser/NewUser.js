import React, { Component } from 'react';
import { database, auth } from '../database';


export default class NewUser extends Component {
  constructor(){
    super();
    this.state={
      name:'',
      userEmail: '',
      password: '',
      error: ''
    }
  }

  newRegister () {
    const { history } = this.props
    const { userEmail, password } = this.state
    const updateErrorInState = (errorMessage) => { this.setState({ error: errorMessage }) }

    auth.createUserWithEmailAndPassword(userEmail, password)
      .then(user => {

          const { uid, email } = user
          const userObj = {
            [uid]:{
              name: this.state.name,
              email,
              uid,
              wishlist:[]
            }
          }
          database.ref('users').update(userObj)
          this.props.logIn({
            name: this.state.name,
            email,
            uid,
            wishlist:[]
          })
          history.push('/')

      })
      .catch(function(error) {
        const errorMessage = error.message;
        updateErrorInState(errorMessage)
        console.log(error.code);
      });
  }

  render(){
    return (
      <div className='login-wrapper'>
        <h1 className="logo">TravelDen</h1>

        <input className='input' placeholder="name" type="text" onChange={(e)=> this.setState({name: e.target.value})} value={ this.state.name } />
        <input className='input' placeholder="email" type="text" onChange={(e)=> this.setState({userEmail: e.target.value})} value={ this.state.userEmail } />
        <input className='input' placeholder="password" type="password" onChange={(e)=> this.setState({password: e.target.value})} value={ this.state.password } />
        <button className='btn' onClick={ () => this.newRegister() }>Submit</button>
        <div className="errorMessage">{this.state.error}</div>

      </div>
    )
  }
}
