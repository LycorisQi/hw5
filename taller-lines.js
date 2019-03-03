function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
  background(220);
  for (var i = 5; i <= 395; i = i + 5) 
  {
    
    line(i, 0, i, i*2);
  }
}
