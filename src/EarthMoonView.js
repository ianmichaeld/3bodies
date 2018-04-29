import React from 'react'
import P5Wrapper from 'react-p5-wrapper'

function sketch(p) {
  var deg = 0
  var deg2 = 0

  p.setup = function() {
    p.createCanvas(1000, 1000, p.WEBGL)
  }

  p.draw = function() {
    p.background('#040623')
    p.noStroke()
    p.directionalLight(250, 250, 250, 0, -4, 0)
    p.push()
      p.ambientMaterial('blue')
      p.sphere(100)
      p.rotateZ(deg2)
    p.pop()
    p.push()
    p.translate(-p.width/4, -p.height/4)
    p.ambientMaterial('#7c7c7a')
      p.sphere(30)
      p.translate(p.width/4, p.height/4)
      p.rotateZ(deg)
    p.pop()
    deg += 0.001;
	  deg2 += 0.028;
  }
}

export default function EarthMoonView() {
  return <P5Wrapper sketch={sketch} />
}
