var word=false;//boolean used for text visibility manipulation
var twinkle=30;//sets changing element of star
var flap=1;//constant used to pulsate the star



function setup() {
  var myCanvas = createCanvas(860, 250);

  myCanvas.parent('mySketch');
}

function draw() {
  background(0, 255, 255);

  //makes the oversized L
  noStroke();
  fill(245, 245, 220);
  rect(0, 0, 50, 250);
  rect(0, 200, 200, 50);

  //makes the star
  ellipse(mouseX, mouseY, twinkle+10, 10);
  ellipse(mouseX, mouseY, 10, twinkle+10);
  twinkle+=flap;

  //sets the conditions of the twinkle
  if (twinkle>=30) {
    flap=-1;
  }
  if (twinkle<=0) {
    flap=1;
  }

  //sets condition of text visibility
  if (word==true) {
    fill(245, 245, 220);
    textSize(100);
    text("oaeza Lorenzo", 60, height/2+50);
  }
}

function mouseClicked() {
  if (word==false) {
    word=true;
  } else if (word==true) {
    word=false;
  }
}
