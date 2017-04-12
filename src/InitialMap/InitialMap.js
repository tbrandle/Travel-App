import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow, SearchBox } from 'react-google-maps';
import './GoogleMap.css';


const InitialMap = withGoogleMap(props => {
  return (
    <GoogleMap
      ref={ props.onMapLoad }
      defaultZoom={14}
      defaultCenter={{ lat:39.73915 , lng: -104.9847 }}>

      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          key={index}
          />
      ))}

    </GoogleMap>
  )
})

export default InitialMap;


// onClick={() => props.onMarkerClick(newMarker)}

// <SearchBox
//   inputPlaceholder="Customized your placeholder"
//   inputStyle={{width: "40px", height: "10px"}}
//   />
