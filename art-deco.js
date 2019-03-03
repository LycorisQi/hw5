function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(255);
  for (var i = 50; i <= 350; i = i + 70) 
  {
    for(var j = 10; j <= 50; j = j + 10)
    {
      rectMode(CENTER);
      noFill();
      rect(i, 200, j, j);
    }
  }
}
