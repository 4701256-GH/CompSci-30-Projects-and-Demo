// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let tilesize = 50;
let someTile;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x += tilesize);
    for (let y = 0; y < height; y += tilesize);
    someTile = spawnTile(x, height/2);


}

function draw() {
  background(220);

  for (let )
  line(someTile.x1, someTile.y1, someTile.x2, someTile.x2);
}

function spawnTile(x,y) {
  let chose = ranmdom(100);
  let tile;

  if (choice > 50){
    tile = {
      x1: x - tilesize/2,
      y1: y + tilesize/2,
      x2: x + tilesize/2,
      y2: y + tilesize/2,
    };

  }
  else{
    tile = {
      x1: x - tilesize/2,
      y1: y - tilesize/2,
      x2: x + tilesize/2,
      y2: y + tilesize/2,
    };
  }
}  