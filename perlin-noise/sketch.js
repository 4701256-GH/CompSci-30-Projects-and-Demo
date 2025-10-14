// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let y; 
let x;
let time = 0;
const TIME_BUFFER = 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // move ball
  x = noise(time) * width;
  y = noise(time + TIME_BUFFER) * height;

  time += 0.01

  // Display ball
  fill("black");
  circle(x, y, 25);
}
