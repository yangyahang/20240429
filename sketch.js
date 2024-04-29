var captureGraphics
var capture_width=640
var capture_height=480
var radioElement
var span
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
  radioElement.option("亮度")
  radioElement.option("炫紅")
  radioElement.option("文字")
  radioElement.style("font-size","25px")
  radioElement.style("color","#fef9ef")
  radioElement.style("background","#14213d")
  radioElement.style("width","50%")
  radioElement.style("border","2px solid #fca3113")
  radioElement.style("border-radius","25px")
}

function draw() {
  background(0);
  noStroke()
  span=5+map(mouseX,0,width,0,20)
  push()
   translate(width/2-capture_width/2,height/2-capture_height/2)
   captureGraphics.image(capture,0,0)
   for(var x=0;x<capture_width;x=x+span){
    for(var y=0;y<capture_height;y=y+span){
      var pixel = captureGraphics.get(x,y)
      fill(pixel)
      if(radioElement.value()=="圓點"||radioElement.value()==""){
        ellipse(x,y,span) 
      }
      if(radioElement.value()=="方塊"){
        rect(x,y,span)  
      }
      if(radioElement.value()=="亮度"){
        bk=(pixel[0]+pixel[1]+pixel[2])/3
        fill(bk)
        ellipse(x,y,span*map(bk,0,255,0.8,1.2)) 
      }
      if(radioElement.value()=="炫紅"){
        colorMode(HSB)
        fill(pixel[0],80,80)
        rectMode(CENTER)
        rect(x,y,span)
        fill(0)
        ellipse(x,y,5)
      }
      if(radioElement.value()=="文字"){
        const density = 'Ñ@#W$9876543210?!abc;:+=-,._ ';
        let txt = "一二三四五田雷電龕龘"
        bk=(pixel[0]+pixel[1]+pixel[2])/3
        let bkId = int(map(bk, 0, 255, 9, 0))
        textSize(span)
        text(txt[bkId],x,y) 
      }
    }
   }
   pop()
}
