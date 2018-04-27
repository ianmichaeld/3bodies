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
        </p>
      </div>
    );
  }
}

export default App;
