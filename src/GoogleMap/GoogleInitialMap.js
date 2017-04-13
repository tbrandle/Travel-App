import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow, SearchBox } from 'react-google-maps';
import './GoogleMap.css';


const GoogleGoogleInitialMap = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={ props.onMapLoad }
      defaultZoom={14}
      defaultCenter={{ lat:39.73915 , lng: -104.9847 }}>

    </GoogleMap>
  )
})

export default GoogleGoogleInitialMap;


// onClick={() => props.onMarkerClick(newMarker)}

// <SearchBox
//   inputPlaceholder="Customized your placeholder"
//   inputStyle={{width: "40px", height: "10px"}}
//   />



//
// {props.itinerary.markers.map((marker, index) => (
//   <Marker
//     {...marker}
//     key={index}
//     />
// ))}
