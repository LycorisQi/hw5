function setup() {
  createCanvas(400, 400);
}
var puck = 
    {
      x: 200,
      y:100,
      vx:-1,
      vy:2,
      size:10,
    }

var leftY = 200; //left hand side player 
var rightY = 200;// right hand side player
var playerWidth = 20;
var playerHeight = 75;
var size = 20;
var rightScore = 0;
var leftScore = 0;

function draw() 
{
  background(220);
  
  line(width/2, 0, width/2, height);
	
  //the puck
  rectMode(CENTER);
  rect(puck.x, puck.y, puck.size,puck.size);
  
  //left player
  rectMode(CORNER);
  rect(0, leftY, playerWidth, playerHeight);

  //right player
  rect(width - playerWidth - 1, rightY, playerWidth, playerHeight);
  
  //update the puck position
  puck.x += puck.vx;
  puck.y += puck.vy;
  
  //check if puck hits the top or bottom
  if (puck.y < 0 || puck.y > height)
  {
    puck.vy = puck.vy * -1;
  }
  
  //check if puck is off left hand side of scrren or hitting paddle
  if(puck.x < playerWidth)
  {
    
  }
  //constain puddles to the screen
  if(rightY <0)
  {
    rightY = 0;
  }  
  if(rightY > height - playerHeight)
  {
    rightY = height - playerHeight;
  }
  
  //scores 
  text(rightScore, 300, 50);
  text(leftScore, 100, 50);
  //check if player get score
  if(puck.x > width)
  {
    text("Point for Left Player", 150, 100);
		leftScore += 1;
    puck.x = 200;
    puck.y = 100;
    puck.vx = random(-3,-2) || random(2,3);
    puck.vy = random(-3,-2) || random(2,3);
  }
  if(puck.x < 0)
  {
    text("Point for Right Player", 150, 100);
    rightScore += 1;
    puck.x = 200;
    puck.y = 100;
    puck.vx = random(-3,3);
    puck.vy = random(-3,3);
  }
  
  //check if puck hitting the left puddle
  if(puck.x <playerWidth)
  {
    if(puck.y > leftY && puck.y < leftY + playerHeight)
    {
      puck.vx = puck.vx * -1;
    }
  }
  
  //check if puck hitting the right puddle
  if(puck.x > width - playerWidth)
  {
    if(puck.y > rightY && puck.y < rightY + playerHeight)
    {
      puck.vx = puck.vx * -1;
    }
  }
  //upload right player position
   if (keyIsDown(UP_ARROW)) 
   {
    rightY -= 5;
   }
  if (keyIsDown(DOWN_ARROW)) 
  {
    rightY += 5;
  }
  
  //upload left player postion
  leftY = puck.y - playerHeight/2;
  //constain puddles to the screen
  if(leftY > height - playerHeight)
  {
    leftY = height - playerHeight;
  }
  if(leftY <0)
  {
    leftY = 0;
  }
}
