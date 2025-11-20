// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let speedy;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // speedy = new Vehicle('kona', 'car')
  speedy = new Car('kona');
  console.log(speedy.getName());
  console.log(speedy.getType());
}

function draw() {
  background(220);
}

class Vehicle{
  constructor(name,type){
    this.name = name
    this.type = type
  }

  getName(){
    return this.name;
  }
  getType(){
    return this.type;
  }

}

class Car extends Vehicle {
  constructor(name){
    super(name, 'car');
  }

  getName(){
    return "this is a car called " + super.getName();
  }
}