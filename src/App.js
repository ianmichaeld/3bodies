import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import EarthMoonView from './EarthMoonView.js'
import MoonPhaseView from './MoonPhaseView.js'
import Legend from './Legend.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Three Bodies!</h1>
        </header>
        <span id="mainView">
          <EarthMoonView />
          <span id="phaseAndLegend">
            <MoonPhaseView />
            <Legend />
          </span>
        </span>
        <p className="App-intro">
          <img
            alt="Sun/moon/earth illuminated orbiter"
            src="https://images.schoolspecialty.com/images/322573_5292A4AB7FC64C3E8886339C212C5CD2.jpg"
          />
        </p>
      </div>
    )
  }
}

export default App
