// CASE 2: node specified, node is a CANVAS ELEMENT
// A canvas with p5 attached will be inserted inside of it.

var s = function( sketch ) {

  var gray = 0; 

  sketch.setup = function() {
    sketch.createCanvas(600, 400);
    sketch.background(gray);
  };

  sketch.draw = function() {
    sketch.rect(sketch.width/2, sketch.height/2, 200, 200);
  }

  sketch.mousePressed = function() {
    gray += 10;
  }

  return sketch;
};

var canvasNode = document.getElementById( 'p5-canvas' );
var sketch = new p5(s, canvasNode);