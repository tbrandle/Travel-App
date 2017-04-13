import React, { Component } from 'react';
import GoogleInitialMap from './GoogleInitialMap'

export default class MapWrapper extends Component {
  constructor(props) {
    super()
    // this.state = {
    //
    // }
  }

  // onMarkerClick(newMarker){
  //   console.log(newMarker);
  //   // this.setState({ ...this.state.markers, ...newMarker})
  // }

  render() {
    return (
      <div className='map-container' style={{height: "400px", width:"400px", margin: "auto"}}>
        <GoogleInitialMap
          containerElement={
            <div style={{ height: "100%"}}/>
          }
          mapElement={
            <div style={{ height: "100%"}}/>
          }
          markers={this.props.markers}
          />
      </div>
    );
  }
}
