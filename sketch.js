var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orangeleaves;
var appleImg, orangeleavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeleavesImg = loadImage("orangeLeaf.png")
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
}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var rand = Math.round(random(1,2))
  if(frameCount % 80===0){
    if(rand === 1){
      createApples()
    } else {
      createOrangeleaf()
    }
  }
}

function createApples(){
  apple=createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale=0.07
  apple.velocityY=3
  apple.lifetime = 400/3
}
function createOrangeleaf(){
  orangeleaves=createSprite(random(50,350),40,10,10)
  orangeleaves.addImage(orangeleavesImg)
  orangeleaves.scale=0.07
  orangeleaves.velocityY=3
  orangeleaves.lifetime = 400/3
}