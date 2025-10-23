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

let mic;

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  background(0);
  fill(255);

  micLevel = mic.getLevel();
  let y = micLevel * 500;
  text(y, width/2, height/2);
  circle(windowWidth/2, windowHeight/2, y );
}
