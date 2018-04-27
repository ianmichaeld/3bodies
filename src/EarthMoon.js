import React, { Component } from 'react';

export default class EarthMoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      location: {}
    }
  }

  render() {
    return (
      <div>
        <h3>Date is: { this.state.date.toLocaleString() } </h3>
      </div>
    )
  }
}
