// INteractive Screen
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let lineSpacing = 15;
let y = 0;
let lineToggle = false;
let strokeColor = "black";
let strokeSize = 2;
let backGround = "white";
let rainbow = "off";
let r;
let g;
let b;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseWheel(changeLineSpacing);
}


function draw() {

  if(rainbow === "on"){
    r = mouseX/6;
    g = (mouseX - mouseY) / 6 ; 
    b = mouseY/3;
    stroke(r, g, b);
  }
  else{
    srtoke = strokeColor;
  }
  
  background(backGround);
  
  let x = 0;
  
  y = 0;
  while(x < windowWidth) {
    line(x, y, mouseX, mouseY);
    x = x + lineSpacing;
  }
 
  x = 0;
  y = windowHeight;
  while(x <= windowWidth ) {
    line(x, y, mouseX, mouseY);
    x = x + lineSpacing;
  } 


  x = width; 
  y = 0;
  while(y < windowHeight) {
    line(x, y, mouseX, mouseY);
    y = y + lineSpacing;
  }


  y = 0;
  x = 0;
  while(y < windowHeight) {
    line(x, y, mouseX, mouseY);
    y = y + lineSpacing;
  }

  if (lines > 1 && event.deltaY > 0) {
    lines = lines - 1; 
  }
  else if (lines < 50 && event.deltaY < 0) {
    lines = lines + 1; 
 }

}

// function changeLineSpacing() {
//   if (lines > 1 && event.deltaY > 0) {
//     lines = lines - 1; 
//   }
//   else if (lines < 50 && event.deltaY < 0) {
//     lines = lines + 1; 
//  }

