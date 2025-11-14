// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theWalkers = [];

class Walker{
  constructor(x,y, theColor){
  this.x = x;
  this.y = y;
  this.speed = 10;
  this.color = theColor;
  this.radius = 5;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2)
  }

  move(){
    let choice = ranodm(100);
    if(choice <  25){
      // up
      this.y -= this.speed;
    }
    else if (choice < 50){
      // down
      this.y += this.speed;
    }
    else if (choice < 75){
      this.x -= this.speed;
    }
    else (choice < 100)
      this.x += this.speed
  }
}

let ro = new Walker(200, 300, "green");


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  ro.move();
  ro.display();
}

for (letmywalker of theWalkers){
  mywalker
}

function spawnwalk(x, y){
  let r = random(255)
  let g = random(255)
  let b = random(255)
  let someColor = collor(r,g,b)
  let someWalker = new Walker(x,y, someColor)
  theWlakers.push(someWalker)
}

function mousedPressd(){
  spawnwalk(mouseX,mouseY)
}