import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import './GoogleMap.css';

const renderSingleMarker =(markers) => {
  return markers.map((marker, index) => <Marker {...marker} key={index} />)
}

const renderAllMarkers =(destinations) => {
  const allMarkers = destinations.reduce((arr, obj) => {
    obj.markers && arr.push({position: obj.markers[0].position})
    return arr
  }, [])
  return allMarkers.map((marker, index) => <Marker {...marker} key={index} />)
}

const GoogleInitialMap = withGoogleMap((props) => {
  return (
    <GoogleMap
      ref={ props.onMapLoad }
      defaultZoom={12}
      defaultCenter={{ lat:39.73915 , lng: -104.9847 }}
      onClick={(event) => props.addMarker && props.addMarker(event)}>

      { props.markers && renderSingleMarker(props.markers) }
      { props.destinations.length && renderAllMarkers(props.destinations) }

    </GoogleMap>
  )
})

export default GoogleInitialMap;


// <SearchBox
//   inputPlaceholder="Customized your placeholder"
//   inputStyle={{width: "40px", height: "10px"}}
//   />
