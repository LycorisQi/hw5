function setup() 
{
  createCanvas(400, 400);
}
var ex = 200;
function draw() 
{
  background(255);
  translate(0, 0);
  for (var i = 10; i <= 390; i = i + 10) 
  {
    if(i < 200)
    {
      line(200 - i, i, 200 + i, i);
    }
    if(i >= 200)
    {

      line(i - 200, i, 400 - (i - 200), i);
    }
  }
}
