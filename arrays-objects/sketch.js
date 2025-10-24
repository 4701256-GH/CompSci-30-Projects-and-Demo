// Audio Visualizer
// Trey Styles
// Oct 10
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theSpirals = [];
let angleOfSpiral;
let mic;


function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
  frameRate(1000);
}

function draw() {
  background("black");
  drawSpiral();
}

// theSpiral = {
//   angle: ,
//   color: ,
//   speed: , 
// }
// function noiseVolume(){
  
//   let y
//   text(y, width/2, height/2);
// }

function drawSpiral(){

  translate(width/2, height/2);
  wave = sin(radians(frameCount));
  w = wave*map(mouseX,0,height,2500,0);
  
 
  for( i = 0; i < 500; i++){
    rotate(50);
    stroke(0,0, 255);
    line(windowWidth, i-w/2, -windowWidth, i++);
    stroke(128, 0, 128);
    line(-windowWidth, -i-w, windowHeight, i++);
    stroke(255);
    line(-windowWidth, i-w, windowWidth, i++);
  }
}


