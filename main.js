const vehicles = [];
let fishNum = 100;
let mover;


function setup() {
  background(100);
  createCanvas(500, 500);
  mover = new Mover(width/2, height/2);
}

function draw() {
  background(50);
  mover.update();
  //mover.edges();
  mover.show();
  
}