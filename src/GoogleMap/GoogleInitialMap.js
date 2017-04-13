import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow, SearchBox } from 'react-google-maps';
import './GoogleMap.css';


const renderSingleMarker =(markers) => {
  return markers.map((marker, index) => <Marker {...marker} key={index} />)
}

const renderAllMarkers =(destinations) => {
  console.log("inside render all markers");
  const allMarkers = destinations.reduce((arr, obj) => {
    obj.markers && arr.push({position: obj.markers[0].position})
    return arr
  }, [])
  console.log("allMarkers ", allMarkers);
  return allMarkers.map((marker, index) => <Marker {...marker} key={index} />)
}

const GoogleInitialMap = withGoogleMap(({ destinations, markers, addMarker, onMapLoad }) => {
  return (
    <GoogleMap
      ref={ onMapLoad }
      defaultZoom={14}
      defaultCenter={{ lat:39.73915 , lng: -104.9847 }}
      onClick={(event) => { addMarker && addMarker(event)}}>

      { markers && renderSingleMarker(markers) }
      { destinations.length && renderAllMarkers(destinations) }

    </GoogleMap>
  )
})

export default GoogleInitialMap;


// <SearchBox
//   inputPlaceholder="Customized your placeholder"
//   inputStyle={{width: "40px", height: "10px"}}
//   />
