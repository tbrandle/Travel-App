export const logIn = (user) => {
  return {
    type: 'LOG_IN',
    user
  }
}

export const addItinerary = (itinerary) => {
  return {
    type: 'ADD_ITINERARY',
    itinerary
  }
}
