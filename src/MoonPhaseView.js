import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch (p) {
  let rotation = 0;

  p.setup = function () {
    p.createCanvas(600, 400, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
    if (props.rotation){
      rotation = props.rotation * Math.PI / 180;
    }
  };

  p.draw = function () {
    p.background(100);
    p.stroke('black');
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
    rotation += .001
  };
};

export default function MoonPhaseView() {
    return(
      <P5Wrapper sketch={sketch} />
    )
  }
