let canvas;

function setup() {
  canvas = createCanvas(windowWidth/1.5, windowHeight/1.5);
  canvas.parent('canvasContainer');
  background(36,36,36);
  canvas.style('border-radius', '8px');
}

function draw() {
  if (mouseIsPressed) {
    stroke(242);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

document.getElementById('saveButton').addEventListener('click', function() {
  // Save the canvas as an image
  saveCanvas(canvas, 'my_best_doodle_ever', 'png');
});
