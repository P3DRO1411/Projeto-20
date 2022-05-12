
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var block1_options{
		resitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options{
		resitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var block3_options{
		resitution:0.01,
		friction:1,
		frictionAir:0.3
	}


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic=true

	}
	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world.block1);

	block2 = Bodies.circle(220,10,10,block2_options);
	World.add(world.block2);

	block3 = Bodies.circle(220,10,10,block3_options);
	World.add(world.block3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gray);
  Engine.update(engine);
  drawSprites();
 
}



