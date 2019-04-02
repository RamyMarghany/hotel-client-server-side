import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import RoomsList from './components/RoomsList';
import Header from './components/Header';


// test cases for room list
describe('<RoomsList />',() => {
  const wrapper = shallow(<RoomsList/>);
  it('should be h3 with hotel rooms text',() =>{
    expect(wrapper.find('h3').text()).toBe('hotel rooms'); 
 })
 it('call componentDidMount', () => {  
  jest.spyOn(RoomsList.prototype, 'componentDidMount')
  const wrapper = shallow(<RoomsList/>)
  expect(RoomsList.prototype.componentDidMount.mock.calls.length).toBe(1)
})
it('update the check the room list come empty firstly', () =>{ 
     const wrapper = shallow(<RoomsList/>)
     expect(wrapper.find('rooms').length).toBe(0)
   })
})


 // test cases for Header
describe('<Header />',() => {
    const wrapper = shallow(<Header/>);
    it('should be .header-nav to be exist',() =>{
      expect(wrapper.find('.header-nav').exists()).toBe(true);
   })

   it('on button click to change p text', ()=>{
    const wrapper= shallow(<Header/>)
    expect(wrapper.find('.login-btn').text()).toBe('Login'); 
  })

  it('matches the snapshot',()=>{
    const tree= shallow(<Header/>);
    expect(toJson(tree)).toMatchSnapshot();
  })
})

