import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  let xzAngle = p.QUARTER_PI + p.HALF_PI
  let moon


  p.preload = function() {
    moon = p.loadImage(process.env.PUBLIC_URL + 'Moon_Map_BW.jpeg')
  }

  p.setup = function() {
    p.createCanvas(500, 500, p.WEBGL)

  }

  p.draw = function() {
    p.background('#040623')
    let dirX = 4 * p.cos(xzAngle)
    let dirZ = 4 * p.sin(xzAngle)
    p.noStroke()
    p.directionalLight(100, 100, 100, dirX, 0, dirZ)
    p.ambientMaterial(250)
    p.texture(moon)
    p.sphere(150)
    xzAngle += 0.001
  }
}

export default function MoonPhaseView() {
  return <P5Wrapper sketch={sketch} />
}
