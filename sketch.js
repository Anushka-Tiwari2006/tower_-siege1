
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var olf;

var engine,world;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


  olf = new Box(200,200,40,50)

  createSprite(400, 200, 50, 50);


  Engine.run(engine)
}

function draw() {
  background(255,255,255);

 
  Engine.update(engine) 
   olf.display();


  drawSprites();
}