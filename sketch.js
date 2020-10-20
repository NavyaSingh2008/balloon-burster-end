var backgroundImage;
var redBalloon,redBalloonImage;
var blueBalloon, blueballloonImage;
var bow, bowImage;
var pinkBalloon,pinkBalloonImage;
var greenBalloon, greenBalloonImage;
var arrow, arrowImage;
var arrowGroup, redB, blueB, greenB, pinkB;
var score=0;


function preload(){
 //load your images here 
 backgroundImage= loadImage("background0.png");
  redBalloonImage=loadImage("red_balloon0.png");
  blueBalloonImage=loadImage("blue_balloon0.png");
  bowImage=loadImage("bow0.png");
  pinkBalloonImage=loadImage("pink_balloon0.png");
  greenBalloonImage=loadImage("green_balloon0.png");
  arrowImage=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5;
  
    arrowGroup = new Group();
  redB= new Group();
  greenB=new Group ();
  pinkB=new Group ();
  blueB=new Group ();
  bow=createSprite(420,200,10,10);
  bow.addImage(bowImage);
 
  

}

function draw() {

 
  //add code here
  background.velocityX=-3;
  if (background.x < 0) {
  background.x = background.width / 2;
}
  bow.y=mouseY;
  createArrow();
  
  var select_balloon= Math.round(random(1,4))
  if (frameCount % 80===0){
      if (select_balloon===1){
      createRed();
          } else
    if(select_balloon===2){
      createPink();
    }else
    if(select_balloon===3){
      createGreen();
    }else
    if(select_balloon===4){
      createBlue();
    }
      }
  if (arrowGroup.isTouching(redB)){
  redB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
  
}
    if (arrowGroup.isTouching(greenB)){
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
  
}
  
    if (arrowGroup.isTouching(pinkB)){
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
  
}
  
    if (arrowGroup.isTouching(blueB)){
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
  
}
  drawSprites(); 
  text("Score: "+ score, 500,50);
}

function createArrow(){
  
  if (keyDown("space")) {
  
arrow=createSprite(350,200,600,600);
  arrow.addImage(arrowImage);
  arrow.scale=0.5;
 arrow.velocityX = -3;
  arrow.y=bow.y;
    arrowGroup.add(arrow);
}

  
}

function createWorld(){
  
  var select_ballon=Math.round(random(1,4));
console.log(select_ballon);
if (world.frameCount %80==0){
  if (selct_balloon==1)
    redBalloon();
  else if(select_balloon==2)
    greenBalloon();
  else if (select_balloon==3)
    blueBalloon();
  else if (select_balloon==4)
    pinkBalloon();

}
  
}

function createRed(){
 redBalloon= createSprite(0,Math.round(random(20,370)),10,10);
  redBalloon.addImage(redBalloonImage);
  redBalloon.velocityX=3;
  redBalloon.lifetime=150;
  redBalloon.scale=0.1;
  redB.add(redBalloon);
}
function createPink(){
 pinkBalloon= createSprite(0,Math.round(random(20,370)),10,10);
  pinkBalloon.addImage(pinkBalloonImage);
  pinkBalloon.velocityX=3;
  pinkBalloon.lifetime=150;
  pinkBalloon.scale=1.5;
  pinkB.add(pinkBalloon);
}
function createGreen(){
 greenBalloon= createSprite(0,Math.round(random(20,370)),10,10);
  greenBalloon.addImage(greenBalloonImage);
  greenBalloon.velocityX=3;
  greenBalloon.lifetime=150;
  greenBalloon.scale=0.1;
  greenB.add(greenBalloon);
}
function createBlue(){
 blueBalloon= createSprite(0,Math.round(random(20,370)),10,10);
  blueBalloon.addImage(blueBalloonImage);
  blueBalloon.velocityX=3;
  blueBalloon.lifetime=150;
  blueBalloon.scale=0.1;
  blueB.add(blueBalloon);
}