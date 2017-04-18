// import configureMockStore from 'redux-mock-store';
import ItineraryWrapper from './ItineraryWrapper';
import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import { browserHistory } from 'react-router';

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


describe('ItineraryWrapper', () => {

  it('should return a div with className no-itineraries if props has no length ', ()=>{
    const ItineraryWrapperComponent = shallow(<ItineraryWrapper itineraries={[]}/>)
    expect(ItineraryWrapperComponent.find('.no-itineraries')).toHaveLength(1)
  })

  it('should map through the itineraries props and display a div with className"single-destination" if props has length of 1', ()=>{
    const singleMockArray = [mockItinerary]
    const ItineraryWrapperComponent = shallow(<ItineraryWrapper itineraries={singleMockArray}/>)
    expect(ItineraryWrapperComponent.find('.single-destination')).toHaveLength(1)
  })

  it('should map through the itineraries props and display a div with className"single-destination" for each if props has length greater than 1', ()=>{
    const doubleMockArray = [mockItinerary, mockItinerary]
    const ItineraryWrapperComponent = shallow(<ItineraryWrapper itineraries={doubleMockArray}/>)
    expect(ItineraryWrapperComponent.find('.single-destination')).toHaveLength(2)
  })

})
