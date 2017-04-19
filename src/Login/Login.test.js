import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';

import Login from './Login';

describe('Login Component', ()=>{

  const LoginComponent = shallow(<Login signIn={jest.fn()} />)

  afterEach(()=> {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

  it('should expect an error message if invalid email', async (done) => {
    fetchMock.post('https://travel-app-sch-1491500719051.firebaseio.com', {code: "auth/invalid-email", message: "The email address is badly formatted."});
     let emailInput = LoginComponent.find('input[name="email"]');
     let submitButton = LoginComponent.find('button');

     emailInput.simulate('change', {
       target: {
         name: 'email',
         value: 'foo@bar.com'
       }
     });

     submitButton.simulate('click');

     await LoginComponent.update();

     let expectedErrorMessage = "The email address is badly formatted.";
     let errorElement = LoginComponent.find('.errorMessage');

     expect(LoginComponent.state().error).toEqual(expectedErrorMessage);
     expect(errorElement.length).toEqual(1);
     expect(errorElement.text()).toEqual(expectedErrorMessage);

     done()
  })

  it('', ()=>{

  })

  it('', ()=>{

  })

  it('', ()=>{

  })

  it('', ()=>{

  })

})
