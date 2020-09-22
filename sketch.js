var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);
  
  speed = random(223,321)
  weight = random(30,52)
    
  
  
  wall = createSprite(1200,200,thickness,200);
  
  bullet = createSprite(100,200,thickness,10);
  bullet.shapeColor = "yellow";

  
  
  
}

function draw() {
  background(0);  
  

  bullet.velocityX = speed;

  if (bullet.isTouching(wall)){
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

    if (damage > 10){
      wall.shapeColor = "red";
    }
    if (damage < 10){
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}