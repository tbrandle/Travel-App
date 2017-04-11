import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './GoogleMap.css';

// const initMap = () => {
//   var uluru = {
//     lat:39.73915 ,
//     lng: -104.9847
//   };
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }

const InitialMap = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={14}
      defaultCenter={{ lat:39.73915 , lng: -104.9847 }}>
    </GoogleMap>
  )
})

// <Marker
//   position={this.props.marker.position}
//   onClick={() => props.onMarkerClick(marker)} />

export default InitialMap;
