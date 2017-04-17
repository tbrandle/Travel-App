import database from '../database';

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
  console.log("inside action");
  return {
    type: 'ADD_ITINERARY',
    itinerary
  }
}
export const retrieveItineraries = (itinerary) => {
  console.log("inside action");
  return {
    type: 'RETRIEVE',
    itinerary
  }
}
