import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow, SearchBox } from 'react-google-maps';
import './GoogleMap.css';


const InitialMap = withGoogleMap(props => {
  console.log(Marker);
  return (
    <GoogleMap
      ref={ props.onMapLoad }
      defaultZoom={14}
      defaultCenter={{ lat:39.73915 , lng: -104.9847 }}>
      <SearchBox
        inputPlaceholder="Customized your placeholder"
        inputStyle={INPUT_STYLE}
      />
      {props.markers.map((marker, index) => (
        <Marker
          {...marker}
          onRightClick={() => props.onMarkerRightClick(index)}
        />
      ))}

    </GoogleMap>
  )
})

export default InitialMap;
