function setup() {
  createCanvas(windowWidth,windowHeight);
  capture=createCapture(VIDEO)
  capture.size(800,800)
}

function draw() {
  background(220);
  push()
   translate(width/2-400,height/2-400)
   image(capture,0,0)
   pop()
}
