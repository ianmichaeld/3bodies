function ellipse(props) {
    const {ctx, x, y, radiusX, radiusY, color} = props
    ctx.fillStyle = color
    ctx.fill()
    ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI)
  }

  function updateLayer(shape, props) {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    shape()

    // ellipse({ctx, x:150, y:150, radiusX:40, radiusY:40, color: '#d1d1d1'})
    // ellipse({ctx, x:400, y:400, radiusX:75, radiusY:75, color: '#187d91'})
  }

// function resize() {
//   // Unscale the canvas (if it was previously scaled)
//   ctx.setTransform(1, 0, 0, 1, 0, 0);

//   // The device pixel ratio is the multiplier between CSS pixels
//   // and device pixels
//   var pixelRatio = window.devicePixelRatio || 1;

//   // Allocate backing store large enough to give us a 1:1 device pixel
//   // to canvas pixel ratio.
//   var w = canvas.clientWidth * pixelRatio,
//       h = canvas.clientHeight * pixelRatio;
//   if (w !== canvas.width || h !== canvas.height) {
//       // Resizing the canvas destroys the current content.
//       // So, save it...
//       var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

//       canvas.width = w; canvas.height = h;

//       // ...then restore it.
//       ctx.putImageData(imgData, 0, 0)
//   }

//   // Scale the canvas' internal coordinate system by the device pixel
//   // ratio to ensure that 1 canvas unit = 1 css pixel, even though our
//   // backing store is larger.
//   ctx.scale(pixelRatio, pixelRatio);

//   ctx.lineWidth = 5
//   ctx.lineJoin = 'round';
//   ctx.lineCap = 'round';
// }

export { ellipse, updateLayer }
