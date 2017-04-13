import React from 'react';

const SingleItinerary = ({match, itineraries}) => {
  const { id } = match.params
  const itinerary = itineraries.filter(obj => {
    obj.id === id
  })
  console.log(itinerary);
   return (
    <div>
      {itinerary.title}
    </div>
  )
}

export default SingleItinerary;
