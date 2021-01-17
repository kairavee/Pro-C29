const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function preload() 
{

}

function setup()
{
  var canvas = createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400,450,200,15);
  ground2 = new Ground(800,350,200,15);

  box1 = new Box(100,275,30,40); 

}

function draw()
{
  background(0);
  Engine.update(engine);

  ground1.display();
  ground2.display();

  box1.display();
}