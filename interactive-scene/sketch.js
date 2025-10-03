// INteractive Screen
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let lineSpacing = 5;
let strokeColor = "white"; 
let backGround = "black";
let rainbow = "off";
let x = 0;
let y = 0;
let r;
let g;
let b;


function setup() {
 let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseWheel(changeLineSpacing);
}


function draw() {

  changerainbow();
  
// set rainbow colors based on the mouse coordinates
  if(rainbow === "on"){
    r = mouseX/6;
    g = (mouseX - mouseY) / 6 ; 
    b = mouseY/3;
    stroke(r, g, b);
  }
// if no rainbow use set stroke color
  else{
    stroke(strokeColor);
  }
  
  background(backGround);
   
// Top part of the screen
  y = 0;
  while(x < windowWidth) {
    line(x, y, mouseX, mouseY);
    x = x + lineSpacing;
  }
 
// bottom of the screen  
  x = 0;
  y = windowHeight;
  while(x <= windowWidth ) {
    line(x, y, mouseX, mouseY);
    x = x + lineSpacing;
  } 

// right of the screen
  x = width; 
  y = 0;
  while(y < windowHeight) {
    line(x, y, mouseX, mouseY);
    y = y + lineSpacing;
  }

// left of the screen
  y = 0;
  x = 0;
  while(y < windowHeight) {
    line(x, y, mouseX, mouseY);
    y = y + lineSpacing;
  }
}

// uses scroll wheel to increase and decrease amount of linespacing
function changeLineSpacing() {
  if (lineSpacing > 1 && event.deltaY > 0) {
    lineSpacing = lineSpacing - 1; 
  }
  else if (lineSpacing < 50 && event.deltaY < 0) {
    lineSpacing = lineSpacing + 1; 
 }
}

// click R or T to turn on and off the rainbow mode
function changerainbow(){
  if (keyIsDown(82) === true && rainbow === "off")
    rainbow = "on";
  else if (keyIsDown(84) === true && rainbow === "on")
    rainbow = "off";
}
