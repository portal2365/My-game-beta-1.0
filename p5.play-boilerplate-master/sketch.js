var BG1;
var player1, player2, playerimg;
var fight1, fightimg;
var cosmic1, cosmicimg;
function preload(){
 BG1 = loadImage ("Ehan fight sprites/my game background.png");
 fightimg= loadImage ("Ehan fight sprites/Fight.png");
 cosmicimg = loadImage ("Ehan fight sprites/cosmic.png");
 playerimg = loadImage ("Ehan fight sprites/My game Character.png")
}





function setup() {
  createCanvas(600,600);
  player1 = createSprite(200,200);
  player1.addImage("player1",playerimg);
  fight1 = createSprite(50,20);
  fight1.addImage("fight1",fightimg);
  cosmic1 = createSprite(20,200);
  cosmic1.addImage ("cosmic1",cosmicimg);
}

function draw() {
  background(BG1);  
  
  drawSprites();
  
}