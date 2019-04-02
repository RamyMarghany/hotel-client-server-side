import React, { Component } from 'react'
import HotelsList from './pages/HotelsList'
import HotelCard from './pages/HotelDetails'
import ConfirmationPage from './pages/ConfirmationPage'
import Header from './components/Header'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <Header/>
          <Route path="/" exact component={HotelsList}></Route>
          <Route path="/hotels/:id"  component={HotelCard}></Route> 
          <Route path="/confirmation/:id" exact component={ConfirmationPage}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
