function setup()
{
   createCanvas(400, 200);
   // DO NOT CHANGE THIS!
   // WRITE YOUR CODE IN THE draw() function!
}

function draw()
{
    // You will need to call the following functions:
    // noFill(), stroke(), strokeWeight(), ellipse(), line(), and text()
    // Look them up here: https://p5js.org/reference/
    fill(0);
    strokeWeight(10);
    noStroke(0,0,0);
    textSize(30);
    text('PyeongChang2018',70,120);
    noFill();
    strokeWeight(5);
    stroke(0, 150, 250);
    rect(132, 25, 65, 1);
    noFill();
    strokeWeight(5);
    stroke(34,139,34);
    rect(185, 35, 1, 35);
    noFill();
    strokeWeight(5);
    stroke(255, 0, 0);
    rect(132, 80, 65, 1);
    noFill();
    strokeWeight(5);
    stroke(0,0,0);
    rect(145, 35, 1, 35);
    noFill();
    strokeWeight(5);
    stroke(0, 0, 0);
    line(240, 5, 240, 30);
    noFill();
    stroke(34,139,34);
    line(265, 20, 240, 30);
    noFill();
    stroke(0, 150, 250);
    line(260, 55, 240, 30);
    noFill();
    stroke(255, 0, 0);
    line(225, 55, 240, 30);
    noFill();
    stroke(255,190,0);
    line(215, 20, 240, 30);
}