function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  for (var i = 10; i <= 390; i = i + 10) {
    line(i, 10, i, 390);
  }
}
