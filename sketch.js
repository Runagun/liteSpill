//GLOBALE VARIABLER
let ballx = 225;
let bally = 225;
let ballSize = 50;
let fart = 1;
let poeng = 0;
let tekstS = 20;
let bakgrunn = 220;
let plasseringPoengY = 40;

function setup() {            //Dette skjer én gang.
  createCanvas(windowWidth, windowHeight);    
  textAlign(CENTER);
  textSize(tekstS);
}  //SLUTT SETUP ---------------------------------

function draw() {            //Dette skjer i loop.
  background(bakgrunn);
  ball();
  tekst();
}  //SLUTT DRAW ----------------------------------

function ball() {
  ellipse(ballx,bally,ballSize,ballSize);
  ballx = ballx - fart;
  if (ballx <= 0-ballSize/2) {
    ballx = windowWidth + ballSize/2;
  }  
}  //SLUTT BALL ----------------------------------

function mousePressed() {
  let avstandBall = dist(ballx, bally, mouseX, mouseY);
  if (avstandBall < ballSize/2) {
    fill('green');
    fart++;
    bally = random(windowHeight+ballSize/2, windowHeight-ballSize/2);
    poeng++;
  }
  if (avstandBall > ballSize/2) {
    fill('red');
    poeng -= 1;
  }
}  //SLUTT MOUSERELEASE --------------------------

function tekst() {
  text("Poeng: " + poeng, windowWidth/2, plasseringPoengY);
}





