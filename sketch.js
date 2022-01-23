
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(1350, 700);

	engine = Engine.create();
	world = engine.world;


	groundObj=new ground(width/2,670,width,20);
	
}


function draw() {
	background(0);
  rectMode(CENTER);
  Engine.update(engine);
 
  groundObj.display()



}



