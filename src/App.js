import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <img alt="Sun/moon/earth illuminated orbiter" src="https://images.schoolspecialty.com/images/322573_5292A4AB7FC64C3E8886339C212C5CD2.jpg" />
          <img alt="Day to day moon phases" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBkUdf7AHUiW0C1nZz4BJ7ZbsfJhZC4xS6k2u-L6h7M5zl0u5" />
        </p>
      </div>
    );
  }
}

export default App;
