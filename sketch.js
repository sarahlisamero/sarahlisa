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
  saveCanvas(canvas, 'doodle', 'png');

  // Convert the canvas to an image data URL
  let dataURL = canvas.elt.toDataURL('image/png');

  // Create a mailto link with the image data URL
  let email = 'sarahlisamero@gmail.com';
  let subject = 'Doodle from Portfolio';
  let body = encodeURIComponent('Here is a doodle I made on your portfolio:\n\n' + dataURL);
  let mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  // Open the mailto link to open the default email client
  window.location.href = mailtoLink;
});
