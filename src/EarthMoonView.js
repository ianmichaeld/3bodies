import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  let earthRotationPeriod = 0
  let moonOrbitalPeriod = 0
  let earthOrbitalPeriod = 0
  let seasonalAdjustment = 0
  let hoursDaylight = 12
  let terminatorAdjustment = 0
  let paused = false
  let earth

  p.preload = function() {
    earth = p.loadImage(process.env.PUBLIC_URL + 'earth_resized_PNG39.png')
  }
  p.setup = function() {
    p.createCanvas(1000, 1000)
  }

  p.draw = function() {
    p.background('#040516')
    .fill('white')
    p.textAlign(p.CENTER)
    p.textSize(24)
    p.text('^  Sunlight is coming from this direction  ^', p.width / 2, 30)
    p.textSize(20)
    p.text('New Moon', p.width / 2, 80)
    p.text('Full Moon', p.width / 2, p.height - 30)
    p.textAlign(p.LEFT)
    p.text('Waxing Crescent', p.width / 8, 3 * p.height / 16, 100, 100)
    p.text('First Quarter', 30, p.height / 2, 100, 100)
    p.text('Waxing Gibbous', p.width / 8, 13 * p.height / 16, 100, 100)
    p.textAlign(p.RIGHT)
    p.text('Waning Gibbous', 3 * p.width / 4, 13 * p.height / 16, 100, 100)
    p.text('Third Quarter', 7 * p.width / 8, p.height / 2, 100, 100)
    p.text('Waning Crescent', 3 * p.width / 4, 3 * p.height / 16, 100, 100)

    p.noStroke()
    p.push()
      // render earth
      p.translate(p.width / 2, p.height / 2)
      p.rotate(earthRotationPeriod)
      p.fill('#4368d8')
      // p.image(earth, 0, 0)
      p.ellipse(0, 0, 150)
      //render observer position
      p.stroke('red')
      p.strokeWeight(4)
      p.line(0, 80, 0, 75)
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
    earthRotationPeriod -= 0.02953
    earthOrbitalPeriod += 0.001 //(0.02953 / 365.25)
    seasonalAdjustment = (4 * p.sin(earthOrbitalPeriod))
    hoursDaylight = 12 + seasonalAdjustment
    terminatorAdjustment = ((hoursDaylight / 24) - 0.5) * p.PI
  }

  p.mousePressed = function() {
    paused = !paused
    if (paused) {
      p.noLoop()
    } else {
      p.loop()
    }
  }
}

export default function EarthMoonView() {
  return <P5Wrapper sketch={sketch} />
}
