var jackImg, jack;
var bgImg, bg,beanstalk;
var obstacle1, obstacle2, reward1, reward2, reward3;
var obstacle1Img, obstacle2Img, reward1Img, reward2Img, reward3Img;
var treasure, hen, cloud, ground;
var treasureImg, henImg, cloudImg, groundImg;

function preload(){
jackImg = loadAnimation("images/jack.png","images/jack_reverse.png");
beanstalk = loadImage("images/beanstalk.png");
bgImg = loadAnimation("images/sky-clouds_gif.gif");
obstacle1Img = loadImage("images/thorn.png");
obstacle2Img = loadImage("images/obstacle_2.png");
reward1img = loadImage("images/reward_1.png");
reward2Img = loadImage("images/reward_2.png");
reward3Img = loadImage("images/reward_3.png");
treasureImg = loadImage("images/treasure.png");
hen = loadImage("images/goldenegg_hen.png");
cloud = loadImage("images/castle_cloud.jpeg");
ground = loadImage("images/ground.png");
}

function setup(){

  createCanvas(windowWidth, windowHeight);
  
//background image
bg = createSprite(400,400,900,400)
bg.addAnimation("moving_clouds",bgImg);
bg.scale = 1.8;

jack = createSprite(400,400,90,90);
jack.addAnimation("climbing",jackImg);
jack.scale = 0.4;

obstacleGroup = new Group();
rewardGroup = new Group();
/*treasure = createSprite(600,500,20,20);
treasure.addImage(treasureImg);
treasure.scale = 0.4;*/

}

function draw() {
  
  //background("white");
  
        
          //making the hot air balloon jump
          /*if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;8*/
           spawnObstacles();
   
        drawSprites();
        
}
function spawnObstacles(){
  if(frameCount % 40 === 0){
    var obstacle = createSprite(600,600,25,25)
    obstacle.velocityY = -(10);
    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacle.addImage(obstacle1Img);
              break;
      case 2: obstacle.addImage(obstacle2Img);
              break;
      default: break;
    }
    obstacle.lifetime = 500;
    obstacle.scale = 0.3;
    obstacleGroup.add(obstacle);
  }
  
}

