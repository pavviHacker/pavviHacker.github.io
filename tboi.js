function setup(){
createCanvas(500, 500, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(255);
  box(200, 200, 200);
}
