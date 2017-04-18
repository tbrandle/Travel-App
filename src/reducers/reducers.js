

export const currentUser = (state = {}, action) => {
  switch(action.type){
    case 'LOG_IN':
      return action.user;
    case 'LOG_OUT':
      return {};
    default:
      return state;
  }
}

export const itineraries = (state = [], action) => {
  switch(action.type){
    case 'ADD_ITINERARY':
      return [...action.itinerary];
    case 'RETRIEVE':
      return [...state, action.itinerary];
    default:
      return state;
  }
}
