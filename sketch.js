var helicopter, helicopter_img; //Helicopter
var package, package_img, package_body, package_movement; //Package
var ground; //Ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	helicopter_img=loadImage("helicopter.png")
	package_img=loadImage("package.png")
}
function setup()
{
	createCanvas(800, 600);

	rectMode(CENTER);

	package=createSprite(width/2, 80, 10,10);
	package.addImage(package_img)
	package.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopter_img)
	helicopter.scale=0.6

	ground=createSprite(width/2, height-35, width,1);
	ground.shapeColor=color("grey")

	engine = Engine.create();
	world = engine.world;

	package_body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.66666666666666666667, isStatic:false});
	World.add(world, package_body);
	
	ground = Bodies.rectangle(width/2, 650, width, 200 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
}
function draw()
{
    rectMode(CENTER);
	background(0);
	
    package.x= package_body.position.x;
	package.y= package_body.position.y;

    drawSprites();
}