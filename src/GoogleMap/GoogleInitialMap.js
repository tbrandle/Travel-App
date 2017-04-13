import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow, SearchBox } from 'react-google-maps';
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

const GoogleGoogleInitialMap = withGoogleMap(({ destinations, markers, addMarker, onMapLoad }) => {
  return (
    <GoogleMap
      ref={ onMapLoad }
      defaultZoom={14}
      defaultCenter={{ lat:39.73915 , lng: -104.9847 }}
      onClick={(event)=> addMarker(event)}>

      { renderSingleMarker(markers) }
      { renderAllMarkers(destinations) }

    </GoogleMap>
  )
})

export default GoogleGoogleInitialMap;


// onClick={() => props.onMarkerClick(newMarker)}

// <SearchBox
//   inputPlaceholder="Customized your placeholder"
//   inputStyle={{width: "40px", height: "10px"}}
//   />
