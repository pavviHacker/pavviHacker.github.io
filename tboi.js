let essere;
var io = {
  x: 320,
  y: 240,
  speed: 3
}
function setup() {
  createCanvas(640, 480);
  essere =  new Essere();
}

function draw() {
  background(0);
  show();
  move();
  essere.move();
  essere.show();
}
function move() {
  if(keyIsDown('87'))
    io.y = io.y - io.speed;
  if(keyIsDown('65'))
    io.x = io.x - io.speed;
  if(keyIsDown('83'))
    io.y = io.y + io.speed;
  if(keyIsDown('68'))
    io.x = io.x + io.speed;
}
function show() {
  fill(255,0,0);
  ellipse(io.x, io.y, 25, 25);
}
class Essere {
  constructor() {
    this.x = 200;
    this.y = 240;
    this.speed = 2;
  }
  move() {
    if (this.x < io.x)
    this.x = this.x + this.speed;
    if (this.x > io.x)
    this.x = this.x - this.speed;
    if (this.y > io.y)
    this.y = this.y - this.speed;
    if (this.y < io.y)
    this.y = this.y + this.speed;
  }
  show() {
    fill(255,0,0);
    ellipse(this.x, this.y, 25, 25);
  }
}
