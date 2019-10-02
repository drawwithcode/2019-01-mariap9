var colorS = ['#ffdedb', '#ffa6b3', '#c4b5ff', '#9cbbff', '#6075db'];
// set the color list of the stroke


function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#5a05e3');
  noFill();

  for (var x = -10; x <= windowWidth; x += 35) {
    for (var y = -10; y <= windowHeight; y += 35) {

      var index = floor(random() * colorS.length);
      var colorHex = colorS[index];
      stroke(color(colorHex));
      strokeWeight(50);

      arc(x, y, 60, 200, PI - QUARTER_PI, -PI);

    }

  }

}

function draw() {
  noStroke();
  if (mouseIsPressed) {
    fill('#5a05e3');
  } else {
    noFill();
  }
  ellipse(mouseX, mouseY, 5, 5);
}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}
