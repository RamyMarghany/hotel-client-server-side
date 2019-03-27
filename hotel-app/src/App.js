import React, { Component } from 'react';
import './App.scss';
import Hotels from './components/Hotels'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hotels/>
      </div>
    );
  }
}

export default App;
