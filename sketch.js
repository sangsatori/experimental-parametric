var t = 0, angle = 0;
function setup()
{
  createCanvas(300,300);
   background(20);

}

function draw()
{


  translate(150,150);
  stroke(255,0,100,5);
  strokeWeight(1)
  rotate(angle);
  angle+=0.01;
  push();
   for (var i = 0; i < 8; i++)
 {
    rotate(PI/6);
    line(x1(t),y1(t),x2(t),y2(t));
    noFill();
    ellipse(x1(t),y1(t),2,2);
    ellipse(x2(t),y2(t),2,2);

 }
  pop();
  t+=1;
  if(t == 1600)
  {
    background(20);
  }
}

function x1(t){
  return 80.9*sin(t/161.8);
}
function y1(t){
  return 161*cos(t/161.8);
}
function x2(t){
  return -161*sin(t/161.8);
}
function y2(t){
  return 80.9*cos(t/161.8);
}
