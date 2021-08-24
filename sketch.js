var snake;
var foodX,foodY;
var score = 0

function setup() {
  createCanvas(800,400);
  snake = new Snake();
  foodLocation();
  frameRate(5);
}

function draw() {
  background("skyblue");  
  textSize(20);
  text("Score: " +score,700,50);
  snake.update();
  // new location is generated when the snake eats the food
  if(snake.eat(foodX,foodY)){
    foodLocation(); //Getting location of Food
    score++
  }
  snake.display();
  fill("yellow");
  rect(foodX,foodY,20,20);  //Create Food along with location and size
  snake.gameOver();   //Keep checking if Game is Over
}

function keyPressed(){      //Code to control snake's direction
  if(keyCode === LEFT_ARROW){
    snake.xdir = -20;
    snake.ydir = 0;
  }
  else if(keyCode === RIGHT_ARROW){
    snake.xdir = 20;
    snake.ydir = 0;
  }
  if(keyCode === UP_ARROW){
    snake.xdir = 0;
    snake.ydir = -20;
  }
  if(keyCode === DOWN_ARROW){
    snake.xdir = 0;
    snake.ydir = 20;
  }
}

function foodLocation (){       // Getting random location for Food
  foodX = floor(random(0,40))*20; //Ensuring the food falls in grids of 20 units
  foodY = floor(random(0,20))*20;
}