// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i <20; i++){
    let choice = random(100)
    if (choice < 50){
      
    }
  }

}

function draw() {
  background(220);
}

class Shape{
  constructor{
    this.y = y;
    this.x = x;
    this.color = color
  }
  display(){
    fill(this.color);
    noStroke();
  }
  
  moveBy(){
    this.x += random(-2,2);
    this.y += random(-2,2);
  }
}

class circle extends Shape{
  constructor(x, y, color, raduis){
    super(x,y, color);
    this.raduis = raduis
  }
  display(){
    super.display();
    circle(this.x, this.y, this.raduis*2);
  }
}

class Squra extends Shape{
  constructor(x,y,color,size){
  super(x,y,color);
  this.size = size;
  }

  display() {
    super.display();
    rectMode(center);
    square
  }
}