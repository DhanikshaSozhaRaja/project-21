var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(600,400);
  bullet=createSprite(50,200,20,5);
  bullet.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(400,200,60,height/2);
  wall.shapeColor="grey";
}

function draw() {
  background("black");
  bullet.velocityX = speed;
    
    if (hasCollided(bullet,wall)){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if (damage>10){
        wall.shapeColor=color(255,0,0);

      }
      if (damage<10){
        wall.shapeColor=("green");
      }
    }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletrightedge=lbullet.x +lbullet.width;
  wallleftedge=lwall.x;
  if (bulletrightedge>=wallleftedge){
    return true
  }
  return false;
}