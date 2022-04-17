var space, shooterPlane, missile, enemy1, India,enemy2, fire, asteriod, comet, meteor
var spaceImg, PlaneImg, missileImg, pakaAamImg,IndiaImg, chichundarImg, fireImg, asteriodImg, cometImg, meteorImg
var allEnemy
var starImg, star

function preload(){

 spaceImg = loadImage("bg.png")
 PlaneImg = loadImage("plane.png")
 missileImg = loadImage("bomb.png")
 pakaAamImg = loadImage("enemy1.png")
 IndiaImg = loadImage("My India.png")
 chichundarImg = loadImage("enemy2.png")
 fireImg = loadImage("fire.png")
 asteriodImg = loadImage("asteriod.png")
 cometImg = loadImage("comet.png")
 meteorImg = loadImage("meteor.png")
 starImg = loadImage("star.png")
}

function setup() {
 createCanvas(windowWidth, windowHeight)
 
 space =createSprite(790,400);
 space.addImage(spaceImg);
 space.velocityY = -6
 space.scale = 1.7

 shooterPlane = createSprite(200,720,300,300)
 shooterPlane.addImage(PlaneImg)
 shooterPlane.scale = 0.4
 
 India = createSprite(220,675)
 India.addImage(IndiaImg)
 India.scale = 0.09

 asteriodGroup = new Group();
 missileGroup = new Group()
 cometGroup = new Group();
 enemyGroup = new Group()
 enemyGroup = new Group()
 meteorGroup = new Group()
 starGroup = new Group();
 
}

function draw() {
 
   shooterPlane.x = World.mouseX
  
   India.x = shooterPlane.x
 
   if(space.y < 300) {
      space.y = height/2
   }
    
    
   if(keyDown("ENTER"))
   createMissile()
     
   function createMissile(){
      missile = createSprite(300,900,300,300)
      missile.addImage(missileImg)
      missile.velocityY = -60
      missile.lifetime = 100
      missile.x = shooterPlane.x
      missile.scale = 0.08
      missileGroup.add(missile)

   }

   function enemyPak(){
      enemy1 = createSprite(Math.round(random(50,1500)),0)
      enemy1.addImage(pakaAamImg)
      enemy1.scale = 0.5
      enemy1.velocityY = 10
      enemy1.lifetime = 150
      enemyGroup1.add(enemy1)
   }

   function enemyChi(){
      enemy2 = createSprite(Math.round(random(50,1500)),0)
      enemy2.addImage(chichundarImg)
      enemy2.scale = 0.3
      enemy2.velocityY = 10
      enemy2.lifetime = 150
      enemyGroup2.add(enemy2)
   }
      
   function ast(){
      asteriod = createSprite(Math.round(random(50,1500)),0)
      asteriod.addImage(asteriodImg)
      asteriod.scale = 0.2
      asteriod.velocityY = 10
      asteriod.lifetime = 150
      asteriodGroup.add(asteriod)
   }
       
   function com(){
      comet = createSprite(Math.round(random(50,1500)),0)
      comet.addImage(cometImg)
      comet.scale = 0.07
      comet.velocityY = 10
      comet.lifetime = 150
      cometGroup.add(comet)
   }
   
   function mete(){
      meteor = createSprite(Math.round(random(50,1500)),0)
      meteor.addImage(meteorImg)
      meteor.scale = 0.08
      meteor.velocityY = 10
      meteor.lifetime = 150
      meteorGroup.add(meteor)
   }
   
   function twinkle(){
      star = createSprite(Math.round(random(50,1500)),0)
      star.addImage(starImg)
      star.scale = 0.08
      star.velocityY = 10
      star.lifetime = 150
      starGroup.add(star)
   }

   var select_enemy = Math.round(random(1,6))
   if(World.frameCount % 100 == 0){
      switch(select_enemy){
      case 1: enemyPak();
      break;
      case 2: enemyChi();
      break;
      case 3: ast();
      break;
      case 4: com();
      break;
      case 5: mete();
      break;
      case 6: twinkle();
      break;
   }
}

 if(missileGroup.isTouching(enemy1))
 enemy1.destroy()

   drawSprites();
    
}


