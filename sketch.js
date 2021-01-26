
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(400,350)
	ground = new Ground (400,685)
	stone = new Stone(750,630)
	rubber = new Rubber(100,665)
	iron = new Iron(200,630)
	sand1 = new Sand(650,650)
	sand2 = new Sand(600,650)
	sand3 = new Sand(550,650)
	sand4 = new Sand(500,650)
	sand5 = new Sand(450,650)
	sand6 = new Sand(400,650)
	Engine.run(engine);
  
}

function draw() {
 // rectMode(CENTER);
  background(0);
  
hammer.display();
ground.display();
stone.display();
rubber.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
iron.display();

drawSprites();
 
}
