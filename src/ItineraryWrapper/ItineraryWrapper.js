import React from 'react';
import { Link }             from 'react-router-dom';


const displayItineraries = (itineraries) =>{

  return itineraries.map((itinerary, i) => {
    return (
      <div className="single-destination" key={i}>
        <p>{itinerary.title}</p>
        <p>{itinerary.description}</p>
        <Link to={`/view_itineraries/${itinerary.id}`}>read more</Link>
      </div>
    )
  })
}

const ItineraryWrapper = ({itineraries}) => {

  if (itineraries.length) {
    return (
      <div>
        {displayItineraries(itineraries)}
      </div>
    )
  } else {
    return <div>There are no itineraries to view.</div>
  }
}

export default ItineraryWrapper;
