import React from 'react';
import GoogleInitialMap from '../GoogleMap/GoogleInitialMap';
import './SingleItinerary.css';


const renderDestinations = (destinations) => {
  return destinations.map((obj, i) => {
    console.log(obj);
    return (
        <div className="single-destination" >
          <p className="place">{obj.place}</p>
          <p>{obj.placeDescription}</p>
        </div>
    )
  })
}

const SingleItinerary = ({match, itineraries}) => {
  const { id } = match.params
  const itinerary = itineraries.find(obj => obj.id === parseInt(id))
  const { destinations } = itinerary
   return (
    <div>
      <div className='single-map-container'>
        <GoogleInitialMap containerElement={ <div style={{ height: "100%"}}/> }
          mapElement={ <div style={{ height: "100%"}}/> }
          destinations={destinations}
          />
      </div>
      <div className="title-card">
        <p className='itinerary-title'>{itinerary.title}</p>
        <p className='itinerary-description'>{itinerary.description}</p>
      </div>
      <div className="render-destination-wrapper">
        {renderDestinations(itinerary.destinations)}
      </div>
    </div>
  )
}

export default SingleItinerary;
