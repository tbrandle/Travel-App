import React, { Component } from 'react';
import ItineraryWrapper from '../ItineraryWrapper/ItineraryWrapper';


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
    if (render === 'itineraries') {
      const userSpecificItineraries = itineraries.filter(itinerary => itinerary.uid === uid)
      return <ItineraryWrapper itineraries={userSpecificItineraries} />
    } else {
      <div>Display wish list here</div>
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
