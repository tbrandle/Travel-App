import React from 'react';
import GoogleInitialMap from '../GoogleMap/GoogleInitialMap';



const SingleItinerary = ({match, itineraries}) => {
  console.log(destinations);
  const { id } = match.params
  const itinerary = itineraries.find(obj => obj.id === parseInt(id))
  const { destinations } = itinerary
   return (
    <div>
      {itinerary.title}
      {itinerary.body}
      <div className='map-container' style={{height: "400px", width:"400px", margin: "auto"}}>

        <GoogleInitialMap containerElement={ <div style={{ height: "100%"}}/> }
          mapElement={ <div style={{ height: "100%"}}/> }
          destinations={destinations}
          />

      </div>
    </div>
  )
}

export default SingleItinerary;
