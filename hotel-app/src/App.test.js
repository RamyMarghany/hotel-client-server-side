import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render,configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import RoomsList,{Link} from './components/RoomsList';

describe('<RoomsList />',() => {
  const wrapper = shallow(<RoomsList/>);
  it('should be anchor tag with learn text',() =>{
    expect(wrapper.find('h3').text()).toBe('hotel rooms'); 
 })
})