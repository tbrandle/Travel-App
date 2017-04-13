import React from 'react';
import GoogleInitialMap from '../GoogleMap/GoogleInitialMap';
import './SingleItinerary.css';



const SingleItinerary = ({match, itineraries}) => {
  console.log(destinations);
  const { id } = match.params
  const itinerary = itineraries.find(obj => obj.id === parseInt(id))
  const { destinations } = itinerary
   return (
    <div>
      {itinerary.title}
      {itinerary.body}
      <div className='single-map-container'>
        <GoogleInitialMap containerElement={ <div style={{ height: "100%"}}/> }
          mapElement={ <div style={{ height: "100%"}}/> }
          destinations={destinations}
          />
      </div>
    </div>
  )
}

export default SingleItinerary;
