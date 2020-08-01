var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,soilder,enemy,bg,soliderIMG,enemyIMG;
var carrierLeftSprite,carrierRightSprite,carrierBottomSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{	
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 400);

	bg = createSprite(400,200,800,380)
	bgIMG=loadImage("Untitled.png")
	bg.addImage(bgIMG)
	bg.scale=0.4;

	carrierLeftSprite = createSprite(350, height-60, 30, 120)
	carrierLeftSprite.shapeColor = 'red'
	carrierRightSprite = createSprite(500, height-60, 30, 120)
	carrierRightSprite.shapeColor = 'red'
	carrierBottomSprite = createSprite(410, 360, 150, 30)
	carrierBottomSprite.shapeColor = 'red'

	packageSprite=createSprite(600, 20, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 60, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	//soilder=createSprite(600, 570, 30, 60);
    //soliderIMG=loadImage("Untitled.png")
	//soilder.addImage(soliderIMG)
	





	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	groundSprite=createSprite(width/2, height-20, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,255,255);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 



  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);
 }
}