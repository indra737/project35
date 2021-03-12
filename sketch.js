var database_;
var balloon;
var scaleV=1
var Bmage
var bImage1,bImage2
var position
var balloonPosition
function preload(){
  Bmage= loadImage('cityImage.png')
bImage1= loadAnimation("01.png","02.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  balloon=createSprite(200,height-250, 50, 50);
 balloon.scale=scaleV
balloon.addAnimation('walking',bImage1)
database_= firebase.database();
balloonPosition= database.ref("balloon/position")
    balloonPosition.on("value",readPosition,showError)
}

function draw() {
  background(Bmage);  
  textSize(20)
  text("**Use Arrow Keys To Move Hot Air Balloon",10,100)
  if(keyDown(LEFT_ARROW)){
    writePosition(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
      writePosition(10,0);
  }
  else if(keyDown(UP_ARROW)){
      writePosition(0,-10);
      balloon.scale-=0.01
      
  }
  else if(keyDown(DOWN_ARROW)){
      writePosition(0,10);
  }
  drawSprites();
}

function writePosition(x,y){
  database.ref("balloon/position").set({
   x : balloon.x + x,
     y: balloon.y + y
  })
 
}
function readPosition(data){
position= data.val()
balloon.x= position.x;
balloon.y= position.y;
}
function showError(err){
    console.error(err);
}
