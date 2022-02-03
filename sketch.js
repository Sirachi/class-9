
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 30, 30);
  box.shapeColor = "blue";
}

function draw() 
{
  background(30);

  if (keyWentDown("left")){
    box.x -= 5;
  }

  if (keyWentDown("right")){
    box.x += 5;
  }

  if (keyWentDown("up")){
    box.y -= 5;
  }

  if (keyWentDown("down")){
    box.y += 5;
  }

  drawSprites();
}




