import React from 'react';
import { Link }             from 'react-router-dom';


const displayItineraries = (itineraries) =>{

  return itineraries.map((itinerary, i) => {
    return (
      <div className="single-destination" key={i}>
        <p className='single-destination-title'>{itinerary.title}</p>
        <p className='single-destination-description'>{itinerary.description}</p>
        <Link to={`/view_itineraries/${itinerary.id}`}>read more</Link>
      </div>
    )
  })
}

const ItineraryWrapper = (props) => {
  debugger;
  if (props.itineraries.length) {
    return (
      <div>
        {displayItineraries(props.itineraries)}
      </div>
    )
  } else {
    return <div className='no-itineraries'>There are no itineraries to view.</div>
  }
}

export default ItineraryWrapper;
