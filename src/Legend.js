import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {

  p.setup = function() {
    p.createCanvas(500, 500)


  }

  p.draw = function() {
    p.background('#040623')
    p.fill('white')
    p.textAlign(p.CENTER)
    p.textSize(36)
    p.text('LEGEND', p.width / 2, 30)
    p.textSize(16)
    p.text('Earth with day/night terminator', p.width / 4 + p.width / 2, p.height / 4)
    p.text('Position of observer', p.width / 4 + p.width / 2, p.height / 2)
    p.text('Moon with day/night terminator', p.width / 4 + p.width / 2, 3 * p.height / 4)
    p.noStroke()
    p.push()
    // render earth
    p.translate(p.width / 4, p.height / 4)
    p.fill('#4368d8')
    p.ellipse(0, 0, 100)
    p.fill(50, 225)
      p.blendMode(p.MULTIPLY)
      p.arc(0, 0, 100, 100, 0, p.PI, p.OPEN)
    p.pop()

    p.push()
    p.translate(p.width / 4, (p.height / 4) + p.height / 4)
    p.stroke('red')
      p.strokeWeight(4)
      p.line(0, 5, 0, 0)
      p.fill('red')
      p.ellipse(0, -7, 5)
    p.pop()
    p.push()
    //render moon
    p.translate(p.width / 4, (p.height / 4) + p.height / 2)
    p.fill('#1e1e1d')
    p.arc(0, 0, 80, 80, 0, p.PI)
    p.fill('white')
    p.arc(0, 0, 80, 80, p.PI, p.TWO_PI)
    p.pop()

  }
}

export default function Legend() {
  return <P5Wrapper sketch={sketch} />
}
