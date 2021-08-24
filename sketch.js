var ground,groundImage
var mario
function preload(){
groundImage=loadImage("ground2.png")
}
function setup(){
createCanvas(360,400) 
ground=createSprite(300,380)
ground.addImage(groundImage)
ground.velocityX=-4
mario=createSprite(50,300)
}
function draw(){
  background('blue')
  if(ground.x<0){
    ground.x=ground.width/2
  }
  drawSprites()     

}
