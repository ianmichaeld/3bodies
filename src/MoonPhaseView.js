import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  let xzAngle = 0

  p.setup = function() {
    p.createCanvas(500, 500, p.WEBGL)

  }

  p.draw = function() {
    p.background('#040623')
    let dirX = 1 * p.cos(xzAngle)
    let dirZ = 1 * p.sin(xzAngle)
    p.noStroke()
    p.directionalLight(255, 255, 255, dirX, 0, dirZ)
    p.ambientMaterial(250)
    p.sphere(150)
    xzAngle += 0.001
  }
}

export default function MoonPhaseView() {
  return <P5Wrapper sketch={sketch} />
}
