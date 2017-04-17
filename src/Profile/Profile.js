import React, { Component } from 'react';

export default class Profile extends Component {

  constructor(){
    super()
    this.state={
      render: 'itineraries'
    }
  }

  renderLists(){
    const { render } = this.state
    const { itineraries, currentUser:{ uid }} = this.props
    console.log(itineraries, uid);
    if (render === 'itineraries') {
      const test =  itineraries.filter(itinerary => itinerary.uid === uid)
      console.log(test);
    } else {

    }
  }

  render(){
    return (
      <div>
        <button onClick={()=> this.setState({render:'itineraries'})}>My Itineraries</button>
        <button onClick={()=> this.setState({render:'wish-list'})}>Wish List</button>
        { this.renderLists() }
      </div>
    )
  }
}
