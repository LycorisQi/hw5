function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(0);
  for (var i = 10; i <= 395; i = i + 20) 
  {
    for(var j = 10; j <= 390; j = j + 20)
    {
      ellipse(i, j, 15, 15);
    }
  }
}
