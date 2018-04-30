import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  var deg = 0
  var deg2 = 0

  p.setup = function() {
    p.createCanvas(1000, 1000)
  }

  p.draw = function() {
    p.background('#040623')
    p.noStroke()
    p.rectMode(p.CENTER)
    p.push()
    p.translate(p.width / 2, p.height / 2)
    p.rotate(deg2)
    p.fill('blue')
    // p.rect(0, 0, 60, 60)
    p.ellipse(0, 0, 150)
    p.pop()

    p.push()
    p.translate(p.width / 2, p.height / 2)
    p.rotate(deg)
    p.push()
    p.translate(p.width / 4, p.height / 4)
    p.rotate(-deg)
    p.fill('gray')
    // ellipse(width/4, height/4, 30);
    // p.rect(0, 0, 30, 30)
    p.arc(0, 0, 80, 80, 0, p.PI)
    p.fill('white')
    p.arc(0, 0, 80, 80, p.PI, p.TWO_PI)

    p.pop()
    p.pop()

    deg += 0.001
    deg2 += 0.028
  }
}

export default function EarthMoonView() {
  return <P5Wrapper sketch={sketch} />
}
