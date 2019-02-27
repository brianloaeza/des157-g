var word=false;//boolean used for text visibility manipulation
var twinkle=30;//sets changing element of star
var flap=1;//constant used to pulsate the star
// Rain rain;
// Rain[] drops= new Rain[3000];
// let drops = [];

function setup() {
  var myCanvas = createCanvas(860, 250);
  // for(int i=0; i<200; i++){
  // drops[i]= new Rain(int(random(860)));
  // rain= new Rain(int(random(860)));
  // }

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

  //makes rain
  // for(int i=0; i<200; i++){
  // drops[i].display();
  // drops[i].fall();
  // }

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

//makes rain
// class Rain{
// constructor(){
 // this.x;//x coordinate of rain
//  this.fall=3;
//  this.y=random(0,250);
// }

 //constructor
//  Rain(var xPos){
//  this.x=xPos;
//  }
//
//  display(){
//   noStroke();
//   fill(245, 245, 220);
//   rect(this.x,this.y,2,10);
//  }
//
//   fall(){
//   this.y+=fall;
//     if(this.y>250){
//       this.y=0;
//   }
// }
// }
