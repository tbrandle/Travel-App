import React from 'react';
import { Link }             from 'react-router-dom';
import './ItineraryWrapper.css'


const removeDuplicates = (itineraries) => {
  let results = []
  itineraries.reduce((array, itinerary) => {
    const { id } = itinerary
    if (!array[id]) {
      array[id] = 1
      results.push(itinerary)
    }
    return array
  },[])
  return results
}

const displayItineraries = (itineraries) =>{
  return removeDuplicates(itineraries).map((itinerary, i) => {
    return (
      <div className='view-wrapper' key={i}>
        <div className='view-img'></div>
          <div className="likes-wrapper single-likes-wrapper">
            <img className="heart-img" src={(require('../../images/heart.svg'))} alt="Likes"/>
            <p className="likes">+{itinerary.likes}</p>
          </div>
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
