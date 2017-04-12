import React, { Component } from 'react';
import './AddItinerary.css'
import MapContainer from '../InitialMap/MapContainer'

export default class AddItinerary extends Component{


  render(){
    return (
      <div>
        <input type="text" placeholder="title" />
        <textarea type="text" placeholder="description" />
        <p>drop a pin or use the search bar to add a destination</p>

        <MapContainer />
      </div>
    )
  }
}
