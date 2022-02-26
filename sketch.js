function setup() {
  createCanvas(800, 800);
  background(68, 37, 58);
  noLoop();
}

function colorCircle(transparency, x, y){
  push()
  fill(255, 127,80, transparency)
  ellipse(x, y, 50, 50)
  pop()
}

let xPos = 300;
let yPos = 200;
let xStep = 50;
let yStep = 60;

// made 10 rows across and 8 colomuns 
// I changed the transparancey for each row 
function draw() {
  for (let i = 0; i < 8; i++) {
    let opacity = 255;
    for (let j = 0; j < 10; j++){
      colorCircle( opacity, xPos + (xStep*i), yPos + (yStep*j))
     opacity -= 30;
    }
  }

}

