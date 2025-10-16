// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  let someRect = spawnRectangle(0 , 50, 200);
  terrain.push(someRect);
}

function draw() {
  background(220);

  for (let theRect of terrain){
    rect(theRect.x, theRect.y, theRect.w, theRect.h);
  }
}

function spawnRectangle(leftSide, rectwidth, rectheight){
  let theRect = {
    x: leftSide,
    y: height - rectheight,
    w: rectwidth,
    h: rectheight,
  };
}