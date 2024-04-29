var captureGraphics
var capture_width=640
var capture_height=480
var radioElement
function setup() {
  createCanvas(windowWidth,windowHeight);
  capture=createCapture(VIDEO);
  capture.size(capture_width,capture_height);
  captureGraphics=createGraphics(capture_width,capture_height)
  captureGraphics.translate(capture_width,0)
  captureGraphics.scale(-1,1)
  capture.hide()
  //============================================================以上為螢幕設定
  radioElement=createRadio()
  radioElement.position(width/2-300,20)
  radioElement.option("圓點")
  radioElement.option("方塊")
  radioElement.style("font-size","25px")
  radioElement.style("color","#fef9ef")
  radioElement.style("background","#14213d")
  radioElement.style("width","16%")
  radioElement.style("border","2px solid #fca3113")
  radioElement.style("border-radius","25px")
}

function draw() {
  background(220);
  noStroke()
  span=5+map(mouseX,0,width,0,20)
  push()
   translate(width/2-capture_width/2,height/2-capture_height/2)
   captureGraphics.image(capture,0,0)
   for(var x=0;x<capture_width;x=x+span){
    for(var y=0;y<capture_height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      if(radioElement.value()=="圓點"){
        ellipse(x,y,span) 
      }
      if(radioElement.value()=="方塊"){
        rect(x,y,span)  
      }
      
    }
   }
  pop()
}
