var ground, paper;
var dustbin;
var Dline1,Dline2,Dline3;
var launcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
  
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	paper = new Paper();
	ground = new Ground();
	
	Dline1 = new Dline(690, 635, 130, 10);
	Dline2 = new Dline(625, 580, 10, 120);
	Dline3 = new Dline(755, 580, 10, 120);

	dustbin=new Dustbin();

	launcher = new Launcher(paper.body,{x:200,y:300});	
}

function draw() {
	rectMode(CENTER);
	background(255);

	Engine.update(engine);

	paper.display();
	Dline1.display();
	Dline2.display();
	Dline3.display();
	dustbin.display();
	ground.display();
	launcher.display();

	drawSprites();

}

function mouseDragged() {
    paper.body.position.x=mouseX;
    paper.body.position.y=mouseY;
}

function mouseReleased () {
	Matter.Body.setStatic(paper.body, false);
	launcher.fly ();
}