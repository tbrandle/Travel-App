import ItineraryWrapper from './ItineraryWrapper';
import React from 'react';
import { shallow } from 'enzyme';
import { mockItinerary, mockItineraries } from '../stub.js';

describe('ItineraryWrapper', () => {

  it('should return a div with className no-itineraries if props has no length ', ()=>{
    const ItineraryWrapperComponent = shallow(<ItineraryWrapper itineraries={[]}/>)
    expect(ItineraryWrapperComponent.find('.no-itineraries')).toHaveLength(1)
  })

  it('should map through the itineraries props and display a div with className"view-wrapper" if props has length of 1', ()=>{
    const ItineraryWrapperComponent = shallow(<ItineraryWrapper itineraries={[mockItinerary]}/>)
    expect(ItineraryWrapperComponent.find('.view-wrapper')).toHaveLength(1)
  })

  it('should map through the itineraries props and display a div with className"view-wrapper" for each if props has length greater than 1', ()=>{
    const ItineraryWrapperComponent = shallow(<ItineraryWrapper itineraries={mockItineraries}/>)
    expect(ItineraryWrapperComponent.find('.view-wrapper')).toHaveLength(3)
  })

})
