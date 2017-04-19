import configureMockStore from 'redux-mock-store';
import * as actions from './actions';
import { mockUser, mockItinerary } from '../stub.js'

const store = configureMockStore()();

describe('LogIn actions', () => {

  afterEach(() => {
    store.clearActions();
  })

  it('creates LOG_IN when initiating the logIn action', () => {
    let expectedAction = { type: 'LOG_IN', user: mockUser}

    store.dispatch(actions.logIn(mockUser));
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('creates LOG_OUT when initiating the logOut action', () => {

    let expectedAction = { type: 'LOG_OUT' }

    store.dispatch(actions.logOut());
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('creates ADD_ITINERARY when initing the addItinerary action', () => {

    let expectedAction = { type: 'ADD_ITINERARY', itinerary: mockItinerary}

    store.dispatch(actions.addItinerary(mockItinerary));
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })

  it('creates RETRIEVE when initing the retrieveItineraries action', () => {

    let expectedAction = { type: 'RETRIEVE', itinerary: mockItinerary}

    store.dispatch(actions.retrieveItineraries(mockItinerary));
    let createdActions = store.getActions();

    expect(createdActions.length).toEqual(1)
    expect(createdActions[0]).toEqual(expectedAction)
  })
})
