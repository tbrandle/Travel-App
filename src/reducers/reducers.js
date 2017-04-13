const initialUserState = {
  email: '',
  password: '',
  error: ''
};

export const user = (state = initialUserState, action) => {
  switch(action.type){
    case 'LOG_IN':
      return [...state, action.user];
    default:
      return state;
  }
}

export const itineraries = (state = [], action) => {
  switch(action.type){
    case 'ADD_ITINERARY':
      return [...state, action.itinerary];
    default:
      return state;
  }
}





// const marker = [{
//   position: {
//     lat: 39.753222,
//     lng: -104.987797
//   }
// }]