var sslide;
var rslide;
var gslide;
var bslide;
var cbutton;
var dbutton;
var state="nod";
function setup() {
  createCanvas(windowWidth-10,windowHeight-65);
  sslide= createSlider(0,200,0);
  rslide= createSlider(0,255,0);
  gslide= createSlider(0,255,0);
  bslide= createSlider(0,255,0);
  cbutton= createButton("clear");
  dbutton= createButton("download your pic");
  background("black");
  createP("(size rgb ) and r g b won't be captured in pic it will appear the fill selected & my brand name(not selling anything) , for comments message me at parameshgaming30@gmail.com")
}

function draw() {
  textSize(20);
  noStroke();
  fill("white");
  if(mouseIsPressed){
    fill(rslide.value(),gslide.value(),bslide.value());
   ellipse(mouseX,mouseY,sslide.value(),sslide.value()); 
    rect(0,0,100,100);
  } 
  if(mouseIsPressed){
    state="d";
  }
  if(state=="nod"){
     text(rslide.value(),30,30);  
     text(gslide.value(),30,50); 
     text(bslide.value(),30,70); 
     text("r",10,30);  
     text("g",10,45); 
     text("b",10,70); 
     text("size,rgb",20,height-5);
}
  cbutton.mousePressed(cllear);
  dbutton.mousePressed(download);
}
function cllear(){
  fill('black');
 ellipse(200,200,10000,10000);
  
}
function download(){
  state="d";
  if(state=="d"){
  fill(rslide.value(),gslide.value(),bslide.value());
  rect(0,0,100,100);
  rect(20,height-20,70,20);
    fill("white");
    textSize(10);
     text("parameshCodes",5,10)
  save();
  }
}

function mouseReleased(){
    (state="nod");
}