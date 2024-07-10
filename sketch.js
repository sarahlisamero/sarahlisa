let canvas;

function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/2);
  canvas.parent('canvasContainer');
  background(30,30,30);
  canvas.style('border', '2px solid #ccc');
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
