var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadmusic("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,580,185,30)
    block3.shapeColor="red"

    block4 = createSprite(700,580,180,30)
    block4.shapeColor="green"

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);

    ball.velocityX=9;
    ball.velocityY=5;
       

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(ball.isTouching(block2) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        music.play();
    }
    
    if(ball.isTouching(block3) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
        music.play();
    }
        
     if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        music.play();
            
            

    }
    

        //write code to stop music
    }

    
    drawSprites();
}
