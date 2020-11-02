var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
 fixedrect=createSprite(400, 200, 50, 50);
 movingrect=createSprite(600,200,50,50);
}

function draw() {
  background(255,255,255);
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x<(movingrect.width+fixedrect.width)/2 && 
  fixedrect.x-movingrect.x<(fixedrect.width+movingrect.width)/2 &&
  movingrect.y-fixedrect.y<(movingrect.height+fixedrect.height)/2 &&
fixedrect.y-movingrect.y<(fixedrect.height+movingrect.height)/2){
   movingrect.shapeColor="pink"
   fixedrect.shapeColor="yellow"
}
else{
  movingrect.shapeColor="white"
  fixedrect.shapeColor="grey"
}
  drawSprites();
}