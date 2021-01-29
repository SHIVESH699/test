var frect
var mrect
function setup() {

  createCanvas(800,800);
  frect=createSprite( 400 , 400 , 20 , 60)
  mrect=createSprite( 100,100, 60, 20)
  
}

function draw() {
  background("black");  
  mrect.x=mouseX;
  mrect.y=mouseY;
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
    frect.x-mrect.x<frect.width/2+mrect.width/2 &&
    mrect.y-frect.y<mrect.height/2+frect.height/2 &&
    frect.y-mrect.y<frect.height/2+mrect.height/2){
    mrect.shapeColor="red";
    frect.shapeColor="red";
  }
  else
  {
    mrect.shapeColor="green";
    frect.shapeColor="green";
  }
  drawSprites();

}