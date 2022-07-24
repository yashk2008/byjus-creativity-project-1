var mazeW1, mazeW2, mazeW3, mazeW4, mazeW5, mazeW6, mazeW7, mazeW8, mazeW9, mazeW10, mazeW11, mazeW12, mazeW13






function preload(){
  
  

}

function setup() {

  
  createCanvas(1500,800);
  mazeW1 = createSprite(50,400,20,650)
  mazeW2 = createSprite(275,725,450,20)


  //creating the player sprite

   //creating sprites to depict lives remaining
   
}

function draw() {
  background("teal"); 

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
}
if(keyDown("DOWN_ARROW")||touches.length>0){
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
  
  
 
}

//player goes back to original standing image once we stop pressing the space bar



//destroy zombie when player touches it


//calling the function to spawn zombies

drawSprites();
}



//creating function to spawn zombies
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    
  }

}
