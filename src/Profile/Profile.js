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

  renderItineraryList(){
    const { itineraries, currentUser:{ uid }} = this.props
    const userSpecificItineraries = itineraries.filter(itinerary => itinerary.uid === uid)
    return <ItineraryWrapper itineraries={userSpecificItineraries} />
  }

  renderWishList(){
    const { itineraries, currentUser:{wishlist}} = this.props
    const newWishList = itineraries.filter(itinerary => wishlist.includes(itinerary.id))
    console.log(newWishList);

    // const newWishList = wishlist.forEach(id=> {
    //   return itineraries.filter(itinerary => itinerary.id === id)
    // })
    console.log(newWishList);
    return <ItineraryWrapper itineraries={newWishList} />
  }

  render(){
    return (
      <div>
        <div className="pic-wrapper">
          <img className="profile-pic" src={this.props.currentUser.photo || require('../../images/profile-placeholder.jpg')} />
          <p className="user-name">{this.props.currentUser.name}</p>
        </div>
        <div className="btn-wrapper">
          <button className="profile-btn my-itineraries" onClick={()=> this.setState({render:'itineraries'})}>My Itineraries</button>
          <button className="profile-btn my-wish-list" onClick={()=> this.setState({render:'wish-list'})}>Wish List</button>
        </div>
        { this.state.render === 'itineraries' ? this.renderItineraryList() : this.renderWishList() }
      </div>
    )
  }
}
