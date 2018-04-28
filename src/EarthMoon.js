import React, { Component } from 'react'
import Konva from 'konva'
import {Layer, Stage, Circle, Group} from 'react-konva'
import {ellipse, updateLayer} from './utils.js'

export default class EarthMoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      location: {}
    };
  }
  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d');
    // var circle = new Konva.Circle({
    //   radius: 40,
    //   fill: 'red',
    //   stroke: 'black',
    //   strokeWidth: 5
    // });
    ellipse({ctx, x:150, y:150, radiusX:40, radiusY:40, color: '#d1d1d1'})
    ellipse({ctx, x:400, y:400, radiusX:75, radiusY:75, color: '#187d91'})
  }

  render() {
    return (
      <div>
        <h3>Date is: {this.state.date.toLocaleString()} </h3>
        <canvas ref="canvas" height="800" width="800"/>
      </div>
    );
  }
}
