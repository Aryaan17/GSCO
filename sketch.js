var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 30);
  car.shapeColor = "white";
  car.velocityX = speed;

  wall = createSprite(1000, 200, 60, 200);
  wall.shapeColor = "grey";
}

function draw() {
  background("black");  

  if (car.collide(wall)){
    car.velocityX = 0;
    deformation = (0.5 * weight * speed * speed)/22500;
    if (deformation<100){
      car.shapeColor = "green";
    } 

    else if (deformation<180){
      car.shapeColor = "yellow";
    }

    else {
      car.shapeColor = "red";
    }
  }
  drawSprites();
}