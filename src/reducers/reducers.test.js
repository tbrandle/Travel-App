import { currentUser, itineraries } from './reducers';


describe('currentUser reducer', () => {

  it('should return an empty object by default', () => {
    expect(currentUser(undefined, {})).toEqual({})
  });

  // it.skip('should return a user object when action is SIGN_IN', () => {
  //   const user = { id: 1, name: 'Bob Loblaw', email: 'foo' };
  //
  //   expect(userReducer(undefined, {
  //     type: 'SIGN_IN',
  //     user
  //   })).toEqual(user);
  // });
  //
  // it.skip('should return to the initialState when action is SIGN_OUT', () => {
  //   expect(userReducer(undefined, {
  //     type: 'SIGN_OUT',
  //   })).toEqual(initialState);
  // });
});
