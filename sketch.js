var sprite
function setup() {
  createCanvas(800,800);
  sprite=createSprite(200,200,10,10)
  sprite.shapeColour='white'
}

function draw() 
{
  background(30);
  if (keyDown("right")) {
    background("red");
  }
}




