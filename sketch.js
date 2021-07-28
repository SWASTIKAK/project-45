var bgImg;
var hang,hangImg1,hangImg2;
var bg;
var leaves,leaves2, leavesImg1, leavesImg2, leavesImg3, leavesImg4;
var sloth,slothImg;
var jaguar, jaguarImg;
var branch1, branch2, branch3, branch3, branchImg1, branchImg2, branchImg3;

//Function to preload necessary Images
function preload(){
   bgImg = loadImage("bg2.jpg");
  /* hangImg1 = loadImage("hang1.png");
   leavesImg1 = loadImage("leaf1left.png");
   leavesImg2 = loadImage("leaf1right.png");
   leavesImg3 = loadImage("leaf2left.png");
   leavesImg4 = loadImage("leaf2right.png");
   slothImg = loadImage("sloth1right.png");*/
   jaguarImg = loadImage("jaguar.png");
   branchImg1 = loadImage("branch1right.png");
   branchImg3 = loadImage("branch2.png");
   branchImg2 = loadImage("branch3.png");
   branchImg4 = loadImage("branch1left.png");

  } 
  
//Function to set initial environment
function setup() {
  createCanvas(1090, 600);
  
  bg = createSprite(600,400);
  bg.addImage("background", bgImg);
  bg.scale = 0.4;
  //bg.velocityY = 5;

 //hang = createSprite(300,140,20,20);
  //hang.addImage("leaves", hangImg1);
  
 // leaves2 = createSprite(414,880);
 /* leaves2.addImage("bushes",leavesImg4 );

  leaves = createSprite(214,915);
  leaves.addImage("bushes",leavesImg1 );

 sloth = createSprite(170,600);
  sloth.addImage("sloth",slothImg );
  sloth.scale = 0.6;

  jaguar = createSprite(444,370);
  jaguar.addImage("jaguar",jaguarImg);
  jaguar.scale = 0.6;

  branch1 = createSprite(64,550);
  branch1.addImage("branches",branchImg1);

  branch2 = createSprite(514,480);
  branch2.addImage("branches",branchImg2);
  branch2.scale = 0.7;

  branch3 = createSprite(44,320);
  branch3.addImage("branches",branchImg3);
  branch3.scale = 0.7;*/
  
}

//Function to display UI
function draw() {
  background("white");

  if(bg.y > 600){
     bg.y = 300;
  }
  spawnBranches();

  drawSprites();
}

function spawnBranches(){

    if(frameCount%120 === 0){
       var branches = createSprite(random(970,1000),-50,10,10);
       branches.velocityY = 4;

       var rand = Math.round(random(1,2));
       switch(rand){
        case 1: branches.addImage(branchImg1);
               break;
        case 2: branches.addImage(branchImg2);
               break;
       default: break;

     }
    }

    if(frameCount%150 === 0){
        var branches1 = createSprite(random(50,100),-50,10,10);
        branches1.velocityY = 4;
 
        var rand = Math.round(random(1,2));
        switch(rand){
         case 1: branches1.addImage(branchImg4);
                break;
         case 2: branches1.addImage(branchImg3);
                 break;
        default: break;

      }
    }
}