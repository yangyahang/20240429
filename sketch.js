var captureGraphics
var capture_width=640
var capture_height=480
var span=5
function setup() {
  createCanvas(windowWidth,windowHeight);
  capture=createCapture(VIDEO);
  capture.size(capture_width,capture_height);
  captureGraphics=createGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
}

function draw() {
  background(220);
  push()
   translate(width/2-capture_width/2,height/2-capture_height/2)
   captureGraphics.image(capture,0,0)
   for(var x=0;x<capture_width;x=x+span){
    for(var y=0;y<capture_height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      rect(x,y,span)
      noStroke()
    }
   }
  pop()
}
