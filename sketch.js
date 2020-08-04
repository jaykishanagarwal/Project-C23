
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dust1;
var ground;
var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=createSprite(width/2, height-35, width,10);
	ground.shapeColor=color(255);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  dust1=new red(650,650,170,20);
  dust2=new red(575,630,20,60);
  dust3=new red(725,630,20,60);
  paper1=new paper(50,50,50,50);

}


function draw() {
  rectMode(CENTER);
  background(0);
  dust1.display();
  dust2.display();
  dust3.display();
  paper1.display();
  
  drawSprites();
 
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
  }
}



