var garden,rabbit;
var gardenImg,rabbitImg;
var Apples;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

rabbit.x=world.mouseX


}

function spawnApples(){
  Apples = createSprite(600,100,40,10)
  Apples.addImage(appleImage)
  Apples.y = Math.round(random(10,60))
  Apples.scale = 0.4
  Apples.velocityX = -3;
  }

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges[3]);

  drawSprites();
  spawnApples();
}