import React, { Component } from 'react';
import ItineraryWrapper from '../ItineraryWrapper/ItineraryWrapper';
import './Profile.css'


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
        <div className="pic-wrapper">
          <img className="profile-pic" src={this.props.currentUser.photo ||require('../../images/profile-placeholder.jpg')} />
          <p className="user-name">{this.props.currentUser.name}</p>
        </div>
        <div className="btn-wrapper">
          <button className="profile-btn" onClick={()=> this.setState({render:'itineraries'})}>My Itineraries</button>
          <button className="profile-btn" onClick={()=> this.setState({render:'wish-list'})}>Wish List</button>
        </div>
        { this.renderLists() }
      </div>
    )
  }
}
