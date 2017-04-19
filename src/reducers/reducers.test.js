import { currentUser, itineraries } from './reducers';
import { mockUser, mockItinerary } from '../stub.js';

describe('currentUser reducer', () => {

  it('should return an empty object by default', () => {
    expect(currentUser(undefined, {})).toEqual({})
  });

  it('should return a user object when action is LOG_IN', () => {

    expect(currentUser(undefined, {
      type: 'LOG_IN',
      user:mockUser
    })).toEqual(mockUser);
  });

  it('should return to an empty object when action is LOG_OUT', () => {
    expect(currentUser(undefined, {
      type: 'LOG_OUT',
    })).toEqual({});
  });
});

describe('itineraries reducer', () => {

  it('should return an empty array by default', () => {
    expect(itineraries(undefined, [])).toEqual([])
  });

  it('should return an itinerary object when action is ADD_ITINERARY', () => {

    expect(itineraries(undefined, {
      type: 'ADD_ITINERARY',
      itinerary:mockItinerary
    })).toEqual([mockItinerary]);
  });

  it('should return to an itinerary object when action is RETRIEVE', () => {
    expect(itineraries(undefined, {
      type: 'RETRIEVE',
      itinerary: mockItinerary
    })).toEqual([mockItinerary]);
  });
});
