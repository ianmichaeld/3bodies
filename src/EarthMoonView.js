import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  let deg = 0
  let deg2 = 0

  p.setup = function() {
    p.createCanvas(1000, 1000)
  }

  p.draw = function() {
    p.background('#040623')
    p.noStroke()
    p.push()
      p.translate(p.width / 2, p.height / 2)
      p.rotate(deg2)
      p.fill('#4368d8')
      p.ellipse(0, 0, 150)
      p.stroke('red')
      p.strokeWeight(4)
      p.line(0, 80, 0, 75)
      p.line(0, 40, 0, 35)
      p.fill('red')
      p.ellipse(0, 85, 5)
    p.pop()

    p.push()
      p.translate(p.width / 2, p.height / 2)
      p.fill(50, 225)
      p.blendMode(p.MULTIPLY)
      p.arc(0, 0, 150, 150, 0, p.PI)
    p.pop()

    p.push()
      p.translate(p.width / 2, p.height / 2)
      p.rotate(deg)
      p.push()
        p.translate(p.width / 4, p.height / 4)
        p.rotate(-deg)
        p.fill('#3a3a37')
        p.arc(0, 0, 80, 80, 0, p.PI)
        p.fill('white')
        p.arc(0, 0, 80, 80, p.PI, p.TWO_PI)
      p.pop()
    p.pop()

    deg -= 0.001
    deg2 -= 0.028
  }
}

export default function EarthMoonView() {
  return <P5Wrapper sketch={sketch} />
}
