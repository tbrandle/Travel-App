import React, { Component } from 'react';
import ItineraryWrapper from '../ItineraryWrapper/ItineraryWrapper';
import './Profile.css'


export default class Profile extends Component {

  constructor(){
    super()
    this.state={
      render: 'itineraries',
      userSpecificItineraries: [],
      totalLikes:0
    }
  }

  componentDidMount(){
    const { itineraries, currentUser:{uid} } = this.props
    const userSpecificItineraries = itineraries.filter(itinerary => itinerary.uid === uid)
    this.addTotalLikesToProfile(userSpecificItineraries)
    this.setState({ userSpecificItineraries })
  }

  addTotalLikesToProfile(itineraryArray){
    const totalLikes = itineraryArray.reduce((sum, itin) => {
      return sum += itin.likes
    },0) || 0
    this.setState({ totalLikes })
  }

  renderItineraryList(){
    return <ItineraryWrapper itineraries={this.state.userSpecificItineraries} />
  }

  renderWishList(){
    const { itineraries, currentUser:{wishlist} } = this.props
    const newWishList = itineraries.filter(itinerary => wishlist.includes(itinerary.id))
    return <ItineraryWrapper itineraries={newWishList} />
  }

  render(){
    return (
      <div>
        <div className="pic-wrapper">
          <img className="profile-pic" src={this.props.currentUser.photo || require('../../images/profile-circle.png')} />
          <div>
            <p className="user-name">{this.props.currentUser.name}</p>
            <div className="likes-wrapper profile-likes-wrapper">
              <img className="heart-img" src={(require('../../images/heart.svg'))} />
              <p className="likes">+{this.state.totalLikes}</p>
            </div>
          </div>
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
