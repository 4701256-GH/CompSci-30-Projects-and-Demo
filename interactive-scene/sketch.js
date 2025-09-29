// INteractive Screen
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let lines = 5;
let y = 0;
let lineToggle = false;
let strokeColor;
let strokeSize = 2;
let backGround = "white";
let rainbow = "on";
let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(rainbow === "on"){
    r = mouseX/2;
    g = (mouseX - mouseY) * 4 ; 
    b = mouseY;
    stroke(r, g, b);
  }
  
  background(backGround);
  
  let x = 0;
  
  y = 0;
  while(x < 401) {
    line(x, y, mouseX, mouseY);
    x = x + lines;
  }
  x = 0;
  while(x < 401) {
    line(x, 400, mouseX, mouseY);
    x = x + lines;
  } 
  y = 0;
  while(y < 401) {
    line(x, y, mouseX, mouseY);
    y = y + lines;
  }
  y = 0;
  x = 0;
  while(y < 401) {
    line(x, y, mouseX, mouseY);
    y = y + lines;
  }
}
