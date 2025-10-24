// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// let mic;

// function setup(){
//   let cnv = createCanvas(windowWidth, windowHeight);
//   cnv.mousePressed(userStartAudio);
//   textAlign(CENTER);
//   mic = new p5.AudioIn();
//   mic.start();
// }

// function draw(){
//   background(0);
//   fill(255);

//   micLevel = mic.getLevel();
//   let y = micLevel * 500;
//   text(y, width/2, height/2);
//   circle(windowWidth/2, windowHeight/2, y );
// }

let theSpirals = [];
let angleOfSpiral;
let mic;
let micLevel;

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  smooth();
  frameRate(1000);
}

function draw(){
  background(0);
  fill(255);
  drawSpiral();
}


function drawSpiral(){

  micLevel = mic.getLevel();
  let volume = micLevel * 2000;
  text(volume, width/2, height/2);

  translate(width/2, height/2);
  wave = sin(radians(frameCount));
  w = wave*map(volume,0,height,2500,0);
  
 
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
