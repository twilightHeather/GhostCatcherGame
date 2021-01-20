var backgroundImage, bg
var ghostCatcher, ghostImage, ghostCatcherImage,gameOverImage,restartImage

var PLAY=1
var END=0
var gameState = PLAY
var score = 0

function preload() {
   backgroundImage = loadImage("images/background.jpg")
   ghostCatcherImage = loadAnimation("images/ghost_catcher-0.png", "images/ghost_catcher-1.png", 
   "images/ghost_catcher-2.png", "images/ghost_catcher-3.png", "images/ghost_catcher-4.png", 
   "images/ghost_catcher-5.png", "images/ghost_catcher-6.png", "images/ghost_catcher-7.png" ,
   "images/ghost_catcher-8.png", "images/ghost_catcher-9.png", "images/ghost_catcher-10.png", 
   "images/ghost_catcher-11.png", "images/ghost_catcher-12.png", "images/ghost_catcher-13.png",
    "images/ghost_catcher-14.png", "images/ghost_catcher-15.png", "images/ghost_catcher-16.png",
     "images/ghost_catcher-17.png", "images/ghost_catcher-18.png", "images/ghost_catcher-19.png",
     "images/ghost_catcher-20.png", "images/ghost_catcher-21.png", "images/ghost_catcher-22.png",
     "images/ghost_catcher-23.png", "images/ghost_catcher-24.png", "images/ghost_catcher-25.png",
     "images/ghost_catcher-26.png", "images/ghost_catcher-27.png", "images/ghost_catcher-28.png",
     "images/ghost_catcher-29.png", "images/ghost_catcher-30.png", "images/ghost_catcher-31.png")
   
     ghostImage = loadAnimation("images/ghost-0.png", "images/ghost-1.png")

    gameOverImage = loadImage("images/GameOver.png")
    restartImage = loadImage("images/restart.png")

}

function setup(){
    createCanvas(1350,650)

bg = createSprite(0,0,1350,650)
bg.addImage(backgroundImage)
bg.scale = 4
bg.velocityX = -3

ghostCatcher = createSprite(200,500,20,20)
ghostCatcher.addAnimation("GhostCatcher", ghostCatcherImage)
ghostCatcher.scale = 0.3

ghostCatcher.setCollider("circle", 0, 0, 100)

ghostCatcher.debug = true

ground = createSprite(675,630,1350,10)
ground.visible = false


gameOver= createSprite(675,325)
gameOver.addImage(gameOverImage)
gameOver.scale = 0.5
gameOver.visible = false

restart = createSprite(675,335)
restart.addImage(restartImage)
restart.scale = 0.5
restart.visible = false

ghostsGroup1 = new Group()
ghostsGroup2 = new Group()
ghostsGroup3 = new Group()
ghostsGroup4 = new Group()

}

function draw(){

    background(0)

    

    if(gameState == PLAY){

      bg.velocityX = -3
        if (bg.x < 0){
            bg.x = bg.width/3;
          } 

          if(keyDown("W")){
            ghostCatcher.velocityY = -3


           
        }


 ghostCatcher.velocityY =  ghostCatcher.velocityY + 0.5

 var select_ghost = Math.round(random(1,4));

 if(frameCount%200==0){

    if(select_ghost ==1){
       spawnGhosts1() 
    }
    else if(select_ghost ==2){
        spawnGhosts2()
    }
    else if(select_ghost ==3){
        spawnGhosts3()
    }
    else{ 
        spawnGhosts4()
    }
 }

 
  if(ghostsGroup1.isTouching(ghostCatcher)){
    ghostsGroup1.destroyEach()
      score= score+1;
     
  }

  if(ghostsGroup2.isTouching(ghostCatcher)){
    ghostsGroup2.destroyEach()
      score= score+1;
     
  }

  if(ghostsGroup3.isTouching(ghostCatcher)){
    ghostsGroup3.destroyEach()
      score= score+1;
     
  }

  if(ghostsGroup3.isTouching(ghostCatcher)){
    ghostsGroup3.destroyEach()
      score= score+1;
     
  }

  if(ghostsGroup4.isTouching(ghostCatcher)){
    ghostsGroup4.destroyEach()
      score= score+1;
     
  }
  if(score==5){
      gameState = END
  }

 
         
    }

    if(gameState == END){
        bg.velocityX = 0
        ghostCatcher.velocityX = 0
        ghostCatcher.velocityY = 0
        gameOver.visible = true
        restart.visible = true
        
        
        if(mousePressedOver(restart)){
          reset();
        }
        
    }

     



 ghostCatcher.collide(ground)


    drawSprites();
    textSize(30)
 fill("black")

    text("Score: " + score, 1200,100)
   
   
}

function spawnGhosts1() {
    //write code here to spawn the clouds
   
      var ghost = createSprite(600,120,40,10);
      ghost.x= Math.round(random(0,1350));
      ghost.y = Math.round(random(0,650));

      ghost.addAnimation("ghost", ghostImage);
      ghost.scale = 0.5;
      ghost.velocityX = -3;
      
       //assign lifetime to the variable
      ghost.lifetime = 200;
      
      
      
      //add each cloud to the group
      ghostsGroup1.add(ghost);
    


}

function spawnGhosts2() {
    //write code here to spawn the clouds

      var ghost = createSprite(600,120,40,10);
      ghost.x= Math.round(random(0,1350));
      ghost.y = Math.round(random(0,650));

      ghost.addAnimation("ghost", ghostImage);
      ghost.scale = 0.5;
      ghost.velocityX = -3;
      
       //assign lifetime to the variable
      ghost.lifetime = 200;
      
      
      
      //add each cloud to the group
      ghostsGroup2.add(ghost);
    
}

function spawnGhosts3() {
    //write code here to spawn the clouds
   
      var ghost = createSprite(600,120,40,10);
      ghost.x= Math.round(random(0,1350));
      ghost.y = Math.round(random(0,650));

      ghost.addAnimation("ghost", ghostImage);
      ghost.scale = 0.5;
      ghost.velocityX = -3;
      
       //assign lifetime to the variable
      ghost.lifetime = 200;
      
      
      
      //add each cloud to the group
      ghostsGroup3.add(ghost);
    


}

function spawnGhosts4() {
    //write code here to spawn the clouds
   
      var ghost = createSprite(600,120,40,10);
      ghost.x= Math.round(random(0,1350));
      ghost.y = Math.round(random(0,650));

      ghost.addAnimation("ghost", ghostImage);
      ghost.scale = 0.5;
      ghost.velocityX = -3;
      
       //assign lifetime to the variable
      ghost.lifetime = 200;
      
      
      
      //add each cloud to the group
      ghostsGroup4.add(ghost);
    


}

function reset(){
  gameState = PLAY;
 
 gameOver.visible = false;
 restart.visible = false;
 
 
 
 score = 0;
}

