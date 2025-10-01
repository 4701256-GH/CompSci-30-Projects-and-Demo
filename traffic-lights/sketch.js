// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let state = "red";
let lastSwitch = 0;
let greenDuration = 4000;
let redDuration = 4000;
let yellowDuration = 4000;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  updateLightState();
  drawOutlineOfLights();
  corectLight();
}
function updateLightState(){
  if(state === red && millis() > lastSwitch + redDuration){
    state = "green";
  }
  else if(state === "green" && millis() > lastSwitch + greenDuration){
    state = "yellow";
  }
  else if(state === yellow && millis() > lastSwitch + yellowDuration){
    state = "red";
  }
}


function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
 
  fill(255, 0 , 0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
function corectLight(){
  if(state === red){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  else if(state === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if(state === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
}

