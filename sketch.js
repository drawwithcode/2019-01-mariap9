function preload(){
  // put preload code here
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  background(10);
  angleMode(DEGREES);
  strokeWeight(3);
  frameRate(30);
  noFill();

}

function draw() {

  translate(width/2,height/2);

  noStroke();
       fill(lerpColor(color(12,12,12,2), color(10,10,10,8),frameCount/180));
       ellipse(0,0,width/1.5+20,width/1.5+20);

  stroke(lerpColor(color('#05cdff'), color('#6105ff'),frameCount/120));
  line(width/8,0,(cos (frameCount*2)*width/6),(sin (frameCount*2)*width/6));

  stroke(lerpColor(color('#6105ff'), color('#05ffbc'),frameCount/270));
  line(0,0,(cos (frameCount*1)*width/3),(sin (frameCount*1)*width/3));


if (frameCount==180) {
  stroke(lerpColor(color('#00d0ff'), color('#ae00ff'),frameCount/120));}


  }
