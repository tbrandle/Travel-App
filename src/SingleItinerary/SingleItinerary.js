import React, { Component } from 'react';
import GoogleInitialMap from '../GoogleMap/GoogleInitialMap';
import { database } from '../database';
import './SingleItinerary.css';


export default class SingleItinerary extends Component {

  constructor(){
    super()
    this.state={
      itinerary:{}
    }
  }

  componentDidMount(){
    const { match, itineraries } = this.props
    const id = parseInt(match.params.id)
    const itinerary = itineraries.find(obj => obj.id === id)
    if (!itinerary.likes) {
      itinerary['likes'] = 0
    }
    this.setState({ itinerary })
  }

  renderDestinations(destinations){
    return destinations.map((obj, i) => {
      return (
        <div className="single-destination" key={i}>
          <p className="place">{obj.place}</p>
          <p>{obj.placeDescription}</p>
        </div>
      )
    })
  }

 handleWishListClick(id){
   if (this.props.currentUser.wishlist && this.props.currentUser.wishlist.includes(id)) {
     return
   }
    const temp = this.props.currentUser.wishlist ? [...this.props.currentUser.wishlist, id] : [id]
    const newWishList = temp.filter(id=> id)
    const newUser = Object.assign({}, this.props.currentUser, {wishlist:newWishList})
    this.props.addToWishList(newUser)
    console.log(newUser);
    database.ref('users').update({[this.props.currentUser.uid]:newUser})
  }

  addLike(){
    const { itineraries } = this.props
    const { itinerary } = this.state;
    const index = itineraries.indexOf(itinerary)
    const newLikes = itinerary.likes ++
    this.setState({likes:newLikes});
    itineraries.splice(index, 1, itinerary)
    this.props.updateItinerary(itineraries)
  }

  render(){
    const { itinerary, itinerary:{destinations}, itinerary:{id} } = this.state
    if (destinations) {
       return (
        <div>
          <div className='single-map-container'>
            <GoogleInitialMap containerElement={ <div style={{ height: "100%"}}/> }
              mapElement={ <div style={{ height: "100%"}}/> }
              destinations={destinations}
              />
          </div>
          <div className="title-card">
            <p className='itinerary-title'>{itinerary.title}</p>
            <div className="likes-wrapper">
              <img className="heart-img" src={(require('../../images/heart.svg'))} />
              <p className="likes">+{itinerary.likes}</p>
            </div>
            <p className='itinerary-description'>{itinerary.description}</p>
          </div>
          <div className="btn-wrapper">
            <button className="btn" onClick={() => this.addLike(itinerary)}>like</button>
            <button className="btn" onClick={() => this.handleWishListClick(id) }>add to wish list</button>
          </div>
          <div className="render-destination-wrapper">
            { this.renderDestinations(itinerary.destinations) }
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}
