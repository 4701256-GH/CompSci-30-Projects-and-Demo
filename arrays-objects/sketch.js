// Audio Visualizer
// Trey Styles
// Oct 10
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  drawSpiral();
  
}


function drawSpiral(){
  stroke(0,0, 255);
  for(i = 0; i < 500; i++){
    rotate(50);
    line(850, i, -850, i++);
  }

}
// function drawCircleThing() {
//   stroke("white");
//   for (i = 0; i < 500; i++) {
//     let angle = i * 0.5;
//     let radius = i * 0.4;
//     let x = radius * cos(angle + time) + 200;
//     let y = radius * sin(angle + time) + 200;

//     point(x,y)
//   }
// }