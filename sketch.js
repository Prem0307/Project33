
const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var bg;
var snowmanImg,snowman;
var snowImg,snow=[];


function preload(){
bg = loadImage("snow2.jpg")
snowmanImg = loadImage("snow3.jpg");

}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
 snowman = createSprite(350,300)
 snowman.addImage(snowmanImg);
 snowman.scale = 0.45;


 

}
function draw() {
  background(bg); 
  Engine.update(engine);
  if(frameCount%5===0){
    snow.push(new Snow(random(0,800),30,30))
  } 
  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
  drawSprites();
}