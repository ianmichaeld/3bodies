import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  let rotation = 0
  var moon
  p.preload = function() {
  }
  p.setup = function() {
    p.createCanvas(400, 400, p.WEBGL)
    moon = p.loadImage('full_moon_large.jpg')
    console.log(moon)
  }

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.rotation) {
      rotation = props.rotation * Math.PI / 180
    }
  }

  p.draw = function() {
    p.background('#040623')
    let angle = 0
    let dirX = (p.mouseX / p.width - 0.5) * 2
    let dirY = (p.mouseY / p.height - 0.5) * 2
    let dirZ = (400 / p.height - 0.5) * 2
    p.noStroke()
    p.directionalLight(250, 250, 250, -dirX, 0, -dirZ)
    // p.ambientMaterial(250)

    p.texture(moon);
    p.sphere(100)
    angle += 0.001
  }
}

export default function MoonPhaseView() {
  return <P5Wrapper sketch={sketch} />
}
