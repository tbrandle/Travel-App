import configureMockStore from 'redux-mock-store';
import * as actions from './actions';

const store = configureMockStore()();

const mockUser = {
  email:"j@gmail.com",
  name:"jay",
  uid:"F8bqpTEph1UMR4WRsXS092G3kUO2"
}

const mockItinerary = {
  description: "jay",
  destinations:[
      {
        markers:[
          {
            position:{
              lat: 39.725646102034084,
              lng:-104.9307632446289
            }
          }
        ],
        place:"asdf",
        placeDescription:"asdf"
      }
    ],
   display:"none",
   id:1492470172298,
   place:"",
   placeDescription:"",
   title:"jay",
   uid:"F8bqpTEph1UMR4WRsXS092G3kUO2"
  }


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
