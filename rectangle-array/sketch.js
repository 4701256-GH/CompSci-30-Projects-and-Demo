// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 50;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(width/CELL_SIZE);
  grid = generateRandomGrid(cols, rows)
}

function draw() {
  background(220);
  displayGrid()
}

function mousedPressed(){
  let x = (Math.floo/CELL_SIZE);
  let y = (math.floor/CELL_SIZE);

  togllecell(x,y)

  togglecell(x+1,y)
  togglecell(x-1,y)
  togglecell(x,y+1)
  togglecell(x,y-1)
}

function togglecell(x,y){

  if (x >= 0 && x < cols && y >= 0 && y < rows){
  if (grid[y][x] = 0) {
    gridrid[y][x] = 1;
  }
  else if (grid[y][x] === 1){
    grid[y][x] = 0;
  }
}
}

function keyPressed(){
  if (key === r){
    grid = generateRandomGrid(cols, rows);
  }
  else if 
}

function displayGrid(){
  for (let y = 0; y < rows; y++)
    for(let x = 0; x < cols; x++)
      if (grid[y][x] === 0 ){
        fill("white");
      }
      else if ((grid)[y][x] === 1){
        fill("black")
      }
}

function generateRandomGrid(){
  let newGrid = []
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      if (random(100) < 50){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1)
      }
    }
 }
}

function generateRandomGrid(){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
        newGrid[y].push(0);
      }
    }
  return newGrid
}
 
