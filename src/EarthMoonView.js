import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  let moonOrbitalPeriod = 0
  let earthRotationPeriod = 0
  let hoursDaylight = 14
  let terminatorAdjustment = ((hoursDaylight / 24) - 0.5) * p.PI


  p.setup = function() {
    p.createCanvas(1000, 1000)
  }

  p.draw = function() {
    p.background('#040516')
    p.noStroke()
    p.push()
      // render earth
      p.translate(p.width / 2, p.height / 2)
      p.rotate(earthRotationPeriod)
      p.fill('#4368d8')
      p.ellipse(0, 0, 150)
      //render observer position
      p.stroke('red')
      p.strokeWeight(4)
      p.line(0, 80, 0, 75)
      p.line(0, 40, 0, 35)
      p.fill('red')
      p.ellipse(0, 85, 5)
    p.pop()

    p.push()
      //render day/night terminator based on length of daylight
      p.translate(p.width / 2, p.height / 2)
      p.fill(50, 225)
      p.blendMode(p.MULTIPLY)
      p.arc(0, 0, 150, 150, 0 + terminatorAdjustment, p.PI - terminatorAdjustment, p.OPEN)
    p.pop()

    p.push()
      //render moon
      p.translate(p.width / 2, p.height / 2)
      p.rotate(moonOrbitalPeriod)
      p.push()
        p.translate(p.width / 4, p.height / 4)
        // necessary to keep sunlit side facing same direction
        p.rotate(-moonOrbitalPeriod)
        p.fill('#1e1e1d')
        p.arc(0, 0, 80, 80, 0, p.PI)
        p.fill('white')
        p.arc(0, 0, 80, 80, p.PI, p.TWO_PI)
      p.pop()
    p.pop()

    moonOrbitalPeriod -= 0.001
    earthRotationPeriod -= 0.028
  }
}

export default function EarthMoonView() {
  return <P5Wrapper sketch={sketch} />
}
