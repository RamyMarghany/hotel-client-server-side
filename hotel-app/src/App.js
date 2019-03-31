import React, { Component } from 'react';
import './App.scss';
import HotelsList from './components/HotelsList'
import HotelCard from './components/Hotel';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="/" exact component={HotelsList}></Route>
          <Route path="/hotels/:id"  component={HotelCard}></Route>        
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
