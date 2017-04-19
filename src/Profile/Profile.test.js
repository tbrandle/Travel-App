import Profile from './Profile';
import React from 'react';
import { shallow } from 'enzyme';
import { mockUser, mockItinerary , mockItineraries} from '../stub.js'


describe('ItineraryWrapper', () => {


  it('there is a profile picture and username', ()=>{
    const ProfileComponent = shallow(<Profile itineraries={mockItineraries} currentUser={mockUser}/>)
    expect(ProfileComponent.find('.profile-pic')).toHaveLength(1)
    expect(ProfileComponent.find('.user-name')).toHaveLength(1)
  })

  it('should have two buttons', ()=>{
    const ProfileComponent = shallow(<Profile itineraries={mockItineraries} currentUser={mockUser}/>)
    expect(ProfileComponent.find('.my-itineraries')).toHaveLength(1)
    expect(ProfileComponent.find('.my-wish-list')).toHaveLength(1)
  })

  it('on click of itineraries btn, it should change state.render to itineraries', ()=>{
    const ProfileComponent = shallow(<Profile itineraries={mockItineraries} currentUser={mockUser}/>)
    const myItinerariesBtn = ProfileComponent.find('.my-itineraries');

    myItinerariesBtn.simulate('click');

    expect(ProfileComponent.state().render).toEqual('itineraries')
  })

  it('on click of itineraries btn, it should display all the itineraries that match user uid', ()=>{
    const ProfileComponent = shallow(<Profile itineraries={mockItineraries} currentUser={mockUser}/>)
    const myItinerariesBtn = ProfileComponent.find('.my-itineraries');

    myItinerariesBtn.simulate('click');

    expect(ProfileComponent.find('.view-wrapper')).toHaveLength(2)
  })

  it('on click of wish list btn, it should change state.render to wish-list', ()=>{
    const ProfileComponent = shallow(<Profile itineraries={mockItineraries} currentUser={mockUser}/>)
    const wishListBtn = ProfileComponent.find('.my-wish-list');

    wishListBtn.simulate('click');

    expect(ProfileComponent.state().render).toEqual('wish-list')
  })

  it('On click of wish-list button, it should render favorites', ()=>{
    const ProfileComponent = shallow(<Profile itineraries={mockItineraries} currentUser={mockUser}/>)
    const myItinerariesBtn = ProfileComponent.find('.my-itineraries');

    myItinerariesBtn.simulate('click');

    expect(ProfileComponent.find('.view-wrapper')).toHaveLength(2)
  })

})
