import React from 'react';
import { Link }             from 'react-router-dom';
import './ItineraryWrapper.css'



const displayItineraries = (itineraries) =>{

  return itineraries.map((itinerary, i) => {
    return (
      <div className='view-wrapper' key={i}>
        <div className='view-img'></div>
        <p className='view-title'>{itinerary.title}</p>
        <p className='view-description'>{itinerary.description}</p>
        <Link className="read-more" to={`/view_itineraries/${itinerary.id}`}>read more</Link>
      </div>
    )
  })
}

const ItineraryWrapper = (props) => {
  if (props.itineraries.length) {
    return (
      <div className="itinerary-wrapper-view">
        {displayItineraries(props.itineraries)}
      </div>
    )
  } else {
    return <div className='no-itineraries'>There are no itineraries to view.</div>
  }
}

export default ItineraryWrapper;
