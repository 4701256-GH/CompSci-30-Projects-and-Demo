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

  translate(width/2, height/2);
  wave = sin(radians(frameCount));
  w = wave*map(mouseX,0,height,2500,0);

  stroke(0,0, 255);
  for( i = 0; i < 500; i++){
    rotate(50);
    line(windowWidth/3, i-w/2, -windowWidth/2, i++);
    stroke(128, 0, 128);
    line(-windowWidth/3, -i-w, windowHeight/2, i++);
    stroke(255);
    line(-windowWidth/3, i-w, windowWidth/2, i++);
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