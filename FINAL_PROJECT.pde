/******************************************************************************
Mehak Sadique
 CISC 1600, Fall 2018
 Project 2 due 11-07-2018
 *******************************************************************************/

//font needed for screen
PFont mediumFont;
//font needed for screen
PFont Font1;

// to start the page
int state=0;
//backgorund image star labs
PImage background;



// flash
PImage flash;
// Enemy 1
PImage thorne;
// Enemy 2
PImage thinker;
// Enemy 3
PImage savitar;
// Enemy 4
PImage coldstone;
// Enemy 5
PImage killerfrost;
// Enemy 6
PImage shark;

// Falling Speed
int speed1 = 0;
//Falling Speed
int speed2= 3;
//the balls being used
int ballCount = 20;


// Flash's Position
float XPos, YPos;

// Enemy Locations
float x = 0;
float y = -85;//below 100
float x1 = 0;
float y1 = -370;//below 400
float x2 = 0;
float y2 = -139;// belo2 200
float x3 = 0;
float y3 = -489;// below 500
float x4 = 0;
float y4 = -290;//below 300
float x5=0;
float y5=-521;// below 600

//ball functions
float[] a = new float[ballCount];//height
float[] c = new float[ballCount];//width
float[] xSpeed = new float[ballCount];//speed
float[] ySpeed = new float[ballCount];//speed
float[] size = new float[ballCount];//size
float[] r = new float[ballCount];//color

// if it is false the game would be over
boolean gameover = false;

void setup() {//program begins

  //format the text size
  String[] fontList = PFont.list();
  mediumFont = createFont(fontList[0], 20);
  Font1 = createFont("Arial Bold", 32);
  
  size(500, 500);// screen size
  
  //background Star Labs flash needs to reach there and leave from there
  background = loadImage("background.jpg"); 
  image(background, 0, 0);
  background.resize(500, 500);
  image(background, 0, 100);
 
   frameRate(20);
   rectMode(CENTER);
  for (int i = 0; i < ballCount; i++) {
    a[i] = random(width);
    c[i] = random(height);
    xSpeed[i] = random(-5, 5);
    ySpeed[i] = random(-5, 5);
    size[i] = random(5, 10);
    r[i] = random(255);
    
  }

  flash = loadImage("flash.jpg"); //Flash hero
  //need to resize image to big
  flash.resize(0, 85);
 //need to resize image to big
  savitar = loadImage("savitar.jpg");//Savitar enemy
 //need to resize image to big
  savitar.resize(0, 75);
 //need to resize image to big
  thorne = loadImage("thorne.jpg");// Eobard Thorne enemy
 //need to resize image to big
  thorne.resize(0, 75);
 //need to resize image to big
  thinker = loadImage("thinker.jpeg");// Thinker enemy
 //need to resize image to big
  thinker.resize(0, 75);
 //need to resize image to big
  coldstone = loadImage("coldstone.jpeg");// Captain Cold enemy
 //need to resize image to big
  coldstone.resize(0, 75);
 //need to resize image to big
  killerfrost = loadImage("killerfrost.jpg");// Killer Frost enemy
 //need to resize image to big
  killerfrost.resize(0, 75);
 //need to resize image to big
  shark = loadImage("shark.jpg");// Killer shark enemy
 //need to resize image to big
  shark.resize(0, 75);

  // randomly operating
  x = random (50, 720);
  x1 = random(50, 720);
  x2 = random(50, 720);
  x3 = random(50, 720);
  x4 = random(50, 720);
  x5=  random(50, 720);
}

void draw() { // to draw the game with the images

  if (state == 0) {            // Start Screen= state, if state does equal to 0 then the method startscreen will print
    startscreen();
  } else if (!gameover) { // to start the game, if it is not gameover the gamae will continue on
    image(background, 0, 0);
    image(flash, XPos, 320);
    int score = millis();
    for (int i = 0; i < ballCount; i++) {

      a[i] -= xSpeed[i];
      if (a[i] < 0 || a[i] > width) {
        xSpeed[i] *= -1;
      }

      c[i] += ySpeed[i];
      if (c[i] < 0 || c[i] > height) {
        ySpeed[i] *= 1;
      }

      fill(r[i]);
      ellipse(a[i], c[i], size[i], size[i]);
    }

    textSize(22);
    text("      Score: " + score, 50, 31);
    fill(255);

    y = y + speed2;
    y1 = y1 + speed2;
    y2 = y2 + speed2;
    y3 = y3 + speed2;
    y4 = y4 + speed2;
    y5=y5+speed2;

    image(thorne, x, y);
    image(thinker, x1, y1);
    image(savitar, x2, y2);
    image(coldstone, x3, y3);
    image(killerfrost, x4, y4);
    image(shark, x5, y5);



    if ( y > height) {
      y=-100; 
      x=random(50, 750);
    }
    if ( y1 > height) {
      y1=-100; 
      x1=random(50, 750);
    }
    if ( y2 > height) {
      y2=-100; 
      x2=random(50, 750);
    }
    if ( y3 > height) {
      y3=-100; 
      x3=random(50, 750);
    }
    if ( y4 > height) {
      y4=-100; 
      x4=random(50, 750);
    }
    if ( y5 > height) {
      y5=-100; 
      x5=random(50, 750);
    }



    if (key==CODED) {
      if (keyPressed == true) {
        if (keyCode == RIGHT && XPos<700) {

          XPos += 4;
        } else {
          if (keyCode == LEFT && XPos>-100) {
            XPos -= 4;
          } else {
            ;
          }
        }
      }
    }


    //attacks happening x-x5/y-y5

    if (attack1(x, y)) {
      speed2= 1; 
      gameover = true; 
      textSize(35);
      text("      FINALE OF GAME: " + score, 201, 250);
      fill(255, 0, 0);
    }
    if (attack2(x1, y1)) {
      speed2 = 1; 
      gameover = true; 
      textSize(35);
      text("      FINALE OF GAME: " + score, 201, 250);
      fill(255, 0, 0);
    }
    if (attack3(x2, y2)) {
      speed2= 1; 
      gameover = true; 
      textSize(35);
      text("     FINALE OF GAME: " + score, 201, 250);
      fill(255, 0, 0);
    }
    if (attack4(x3, y3)) {
      speed2 = 1; 
      gameover = true; 
      textSize(35);
      text("       FINALE OF GAME: " + score, 201, 250);
      fill(255, 0, 0);
    }
    if (attack5(x4, y4)) {
      speed2 = 1; 
      gameover = true; 
      textSize(35);
      text("      FINALE OF GAME: " + score, 201, 250);
      fill(255, 0, 0);
    }
    if (attack6(x5, y5)) {
      speed2 = 1; 
      gameover = true; 
      textSize(35);
      text("      FINALE OF GAME: " + score, 201, 250);
      fill(255, 0, 0);
    }
  }
}




void startscreen() {

  background(#c4aca8);


  textFont(Font1);
  textAlign(CENTER);
  fill(#660d0d);
  text("   Simple Flash Game", 200, 100); 


  textFont(mediumFont);
  textAlign(CENTER);
  fill(#660d0d);
  text("    1. Use arrows to control the flashes speed", 200, 160); 
  text("    2. Do not allign with villan", 200, 180); 
  text("    3. The only function is right-left or left-right", 200, 200); 
  text("    4. Click START to begin (:", 200, 220); 
  


  stroke(#660d0d); 
  strokeWeight(1); 
  fill(#ffffff);        
  textFont(Font1);
  textAlign(CENTER);
  fill(#660d0d);
  text("START", 200, 310); 

  if (mousePressed == true) {
    if (mouseX <=260 && mouseX >= 140 ) {
      state=1;
    }
  }
}

boolean attack1(float x, float y)
{
  if (Math.abs(x-XPos)<60 && y > 330) {
    return(true);
  } else {
    return(false);
  }
}


boolean attack2 (float x1, float y1)
{
  if (Math.abs(x1-XPos)<60 && y1 > 330) {
    return(true);
  } else {
    return(false);
  }
}

boolean attack3 (float x2, float y2)
{
  if (Math.abs(x2-XPos)<60 && y2 > 330) {
    return(true);
  } else {
    return(false);
  }
}

boolean attack4 (float x3, float y3)
{
  if (Math.abs(x3-XPos)<60 && y3 > 330) {
    return(true);
  } else {
    return(false);
  }
}

boolean attack5 (float x4, float y4)
{
  if (Math.abs(x4-XPos)<50 && y4 > 330) {
    return(true);
  } else {
    return(false);
  }
}
boolean attack6 (float x5, float y5)
{
  if (Math.abs(x5-XPos)<50 && y5 > 330) {
    return(true);
  } else{
    return(false);
  }
}
