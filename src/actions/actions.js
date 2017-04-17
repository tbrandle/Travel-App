import database from '../database';


export const logIn = (user) => {
  return {
    type: 'LOG_IN',
    user
  }
}

export const addItinerary = (itinerary) => {
  console.log("inside action");
  return {
    type: 'ADD_ITINERARY',
    itinerary
  }
}
