
export const logIn = (user) => {
  console.log(user);
  return {
    type: 'LOG_IN',
    user
  }
}

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
}

export const addItinerary = (itinerary) => {
  return {
    type: 'ADD_ITINERARY',
    itinerary
  }
}
export const retrieveItineraries = (itinerary) => {
  return {
    type: 'RETRIEVE',
    itinerary
  }
}

export const addToWishList =(newUser) => {
  return {
    type:'UPDATE_USER',
    newUser
  }
}

export const updateItinerary =(itineraries) =>{
  return {
    type:'UPDATE_ITINERARY',
    itineraries
  }
}
