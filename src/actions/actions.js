
export const logIn = (user) => {

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
