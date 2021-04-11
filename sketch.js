 var snake,snakeImg;
 var mouse1,mouse2,mouse3,mouseImg;
 var mongoose,mongooseImg;
 var background,backgroundImg;
 
 
 function preload (){
backgroundImg = loadImage ("background.png");
mongooseImg = loadImage ("mongoose.jpg");
mouseImg = loadImage ("mouse.jpg");
snakeImg = loadImage ("snake.png");



}

function setup (){
createCanvas (800,800);
snake = createSprite (100,150);
snake.addImage ("snake",snakeImg);
snake.scale=0.3;
}

function draw (){
background (backgroundImg);

drawSprites ();

}