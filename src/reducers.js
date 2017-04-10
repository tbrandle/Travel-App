const initialUserState = {
  email: '',
  password: '',
  error: ''
};

export const user = (state = initialUserState, action) => {
  switch(action.type){
    case 'LOG_IN':
      return action.user;
    default:
      return state;
  }
}
