var balloon;
var image
var bImage1,bImage2
function preload(){
  image= loadImage('cityImage.png')
bImage1= loadAnimation('01.png','02.png')
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  balloon=createSprite(400, 200, 50, 50);
 
}

function draw() {
  background(image);  
  balloon.addAnimation("flying",bImage1)
  drawSprites();
}