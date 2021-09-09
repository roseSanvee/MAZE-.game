 var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wal10,wal11,wal12,wal13,
 wal14,wal15,wal16,wal17,wal18,
 wal19,wal20,wal21,wal22,wal23,wal24,wal25,wal26,wal27,wal28,wal29,
 wal30,wal31,wal32,wal33,wal34,wal35,wal36,wal37,wal38,wal39,wal40;
 var player,girl1,girl2,girl3,sister,girl;
 var obstaclesGroup, obstacle1, obstacle2;
 var ghaas;

function preload(){

girl1=loadAnimation("girlFinal1.png","girlfinal2.png");
girl2=loadAnimation("left1.png","girlLEFT2.png");
girl3=loadAnimation("girlRIGHT1.png","girlRIGHT.png");

sisImage = loadImage("cry.png");
 
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");

//ghaas=loadImage("ghasphus.png");
jhad=loadImage("jhad.png");



}
function setup(){
createCanvas(4000,3000);
sister=createSprite(1465,1563,100,100);
sister.addImage(sisImage);
wall1=createSprite(291,2659,1000,100);
wall1.addImage(jhad);
wall2=createSprite(2903,2659,2500,100);
wall2.addImage(jhad);
wall3=createSprite(3740,420,100,4690);
wall3.addImage(jhad);
wall4=createSprite(115,135,7500,100);
wall4.addImage(jhad);
wall5=createSprite(163,430,100,4690);
wall5.addImage(jhad);
wall6=createSprite(700,2200,100,1000);
wall6.addImage(jhad);
wall7=createSprite(1212,2434,100,500);
wall7.addImage(jhad);
wall8=createSprite(1100,1921,1318,100);
wall8.addImage(jhad);
wall9=createSprite(1206,1745,100,400);
wall9.addImage(jhad);
wal10=createSprite(1363,2662,700,100);
wal10.addImage(jhad);
wal11=createSprite(1862,1288,700,100);
wal11.addImage(jhad);
wal12=createSprite(1606,2123,100,400);
wall2.addImage(jhad);
wal13=createSprite(1724,2123,580,100);
wall3.addImage(jhad);
wal14==createSprite(1929,2295,100,330);
wall4.addImage(jhad);
wal15=createSprite(2368,2332,890,100);
wall5.addImage(jhad);
wal16=createSprite(2780,2122,100,400);
wall6.addImage(jhad);
wal17==createSprite(3424,2473,700,100);
wall7.addImage(jhad);
wal18==createSprite(2199,1269,100,700);
wall8.addImage(jhad);
wal19=createSprite(2195,1661,1000,100);
wall9.addImage(jhad);
wal20=createSprite(2406,1928,100,450);
wal20.addImage(jhad);
wal21=createSprite(1974,1818,100,250);
wal21.addImage(jhad);
wal22=createSprite(3280,1710,900,100);
wal22.addImage(jhad);
wal23=createSprite(3372,1948,100,600);
wal23.addImage(jhad);
wal24=createSprite(3165,2085,359,100);
wal24.addImage(jhad);
wal25=createSprite(3110,708,100,1090);
wal25.addImage(jhad);
wal26=createSprite(3337,749,359,100);
wal26.addImage(jhad);
wal27=createSprite(3011,1381,1000,100);
wal27.addImage(jhad);
wal28=createSprite(761,1294,1000,100);
wal28.addImage(jhad);
wal30=createSprite(505,455,830,100);
wal30.addImage(jhad);
wal31=createSprite(2771,923,780,100);
wal31.addImage(jhad);
wal32=createSprite(873,2345,200,100);
wal32.addImage(jhad);
wal33=createSprite(905,1486,100,290);
wal33.addImage(jhad);
wal34=createSprite(1286,474,100,790);
wal34.addImage(jhad);
wal35=createSprite(1964,455,100,700);
wal35.addImage(jhad);
wal36=createSprite(1654,560,530,100);
wal36.addImage(jhad);
wal37=createSprite(2355,605,570,100);
wal37.addImage(jhad);
wal38=createSprite(492,805,570,100);
wal38.addImage(jhad);
wal39=createSprite(1212,1115,570,100);
wal39.addImage(jhad);
player=createSprite(896,2636,80,80);

player.shapeColor="skyBlue";
//player.addAnimation("running",girl1);
///player.addAnimation("running",girl2);
girl1.scale = 0.5;
girl2.scale=0.5;
girl3.scale=0.5;
}
function draw(){
background("Green");
camera.position.x=player.x;
camera.position.y=player.y


//console
console.log(mouseX);
console.log(mouseY);
if (keyDown("D")){
   player.x=player.x+8
   player.addAnimation("running",girl3);
}
if (keyDown("A")){
    player.x=player.x-8
    player.addAnimation("running",girl2);

}
if(keyDown("S")){
    player.y=player.y+8
    player.addAnimation("running",girl1);
}
if (keyDown("W")){
    player.y=player.y-8
    player.addAnimation("running",girl1);
}




///Sofia.bounceOff(obstacle3);
//Sofia.bounceOff(obstacle4);
//Sofia.bounceOff(obstacle5);
//Sofia.bounceOff(obstacle6);
//Sofia.bounceOff(obstacle7);
//Sofia.bounceOff(obstacle7);
//Sofia.bounceOff(obstacle8);
//Sofia.bounceOff(obstacle9);
//Sofia.bounceOff(obstacle10);
//Sofia.bounceOff(obstacle11);
//Sofia.bounceOff(obstacle12);
//Sofia.bounceOff(obstacle13);
//Sofia.bounceOff(obstacle14);
//Sofia.bounceOff(obstacle15);
//Sofia.bounceOff(obstacle16);
//Sofia.bounceOff(obstacle17);
//Sofia.bounceOff(obstacle18);
//vSofia.bounceOff(obstacle19);
//Sofia.bounceOff(obstacle20);
//Sofia.bounceOff(obstacle21);
//Sofia.bounceOff(obstacle22);
//Sofia.bounceOff(edges);
//Sofia.bounceOff(bottomEdge);


//if (girl.isTouching(sister)) {          
    //stroke(0);
   //fill(0);
   //textSize(32);
   //text("YOU WIN",120,200);
  
  


//groups
obstaclesGroup = createGroup();   
     
      //set lifetime of the game objects so that they are never destroyed
      // obstaclesGroup.setLifetimeEach(-1);
 //obstaclesGroup.setVelocityXEach(0);





drawSprites();
}

//function reset(){
  //  /////changing gamestate
   // gameState=PLAY;
    //obstaclesGroup.destroyEach();
//girl.changeAnimation("running",girl_jump);
   // score=0;
//}
//function spawnObstacles(){
  //  if (frameCount % 60 === 0){
    //  var obstacle = createSprite(600,165,10,40);
     // obstaclesGroup.y = Math.round(random(10,60))
      
       //generate random obstacles
       //var rand = Math.round(random(1,6));
       //switch(rand) {
         //case 1: obstacle.addImage(obstacle1);
           //      break;
         //case 2: obstacle.addImage(obstacle2);
             //    break;
           //      default: break;
               // }
            
                //assign scale and lifetime to the obstacle           
  //  obstacle.scale = 0.5;
    //obstacle.lifetime = 300;
   
   //add each obstacle to the group
  //  obstaclesGroup.add(obstacle);
 //}
//}

                