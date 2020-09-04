var fixcube, movecube;

function setup() {
  createCanvas(800,400);
  fixcube=createSprite(400, 200, 50, 50);
  fixcube.shapeColor="orange";
  movecube=createSprite(300,400,50,50);
movecube.shapeColor="purple";
}

function draw() {
  background("blue");
  
  movecube.y=World.mouseY;
  movecube.x=World.mouseX;

  if(movecube.x-fixcube.x<movecube.width/2+fixcube.width/2 && 
    fixcube.x-movecube.x<movecube.width/2+fixcube.width/2 && 
    movecube.y-fixcube.y<movecube.height/2+fixcube.height/2 && 
    fixcube.y-movecube.y<movecube.height/2+fixcube.height/2){
    movecube.shapeColor="green";
    fixcube.shapeColor="yellow";
  }
  else{
    movecube.shapeColor="purple";
    fixcube.shapeColor="orange";
  }

  drawSprites();
}