import React, { Component } from 'react';
import InitialMap from './InitialMap'

export default class MapContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      markers: [{
        position: {
          lat: 39.753222,
          lng: -104.987797
        }
      }]
    }
  }

  render() {
    return (
      <div className='map-container' style={{height: "400px", width:"400px", margin: "auto"}}>
        <InitialMap
          containerElement={
            <div style={{ height: "100%"}}/>
          }
          mapElement={
            <div style={{ height: "100%"}}/>
          }
          markers={this.state.markers}
          />
      </div>
    );
  }
}
