import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  // var moon
  let xzAngle = 0

  p.setup = function() {
    p.createCanvas(400, 400, p.WEBGL)
    // moon = p.loadImage('full_moon_large.jpg')
    // console.log(moon)
  }

  p.draw = function() {
    p.background('#040623')
    let dirX = 2 * p.cos(xzAngle)
    let dirZ = 2 * p.sin(xzAngle)
    p.noStroke()
    p.directionalLight(250, 250, 250, dirX, 0, dirZ)
    p.ambientMaterial(250)
    p.sphere(100)
    xzAngle += 0.005
  }
}

export default function MoonPhaseView() {
  return <P5Wrapper sketch={sketch} />
}
