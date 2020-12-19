
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boy_image ;
function preload()
{
	boy_image = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,415,20,20);
	boy.addImage(boy_image);
	boy.scale = 0.1
	ground = new Ground(600,485,1200,30);
	tree = new Tree(975,265);
	stone = new Stone(150,350,50,50);
	chain = new Sling(stone.body,{x:150,y:360})
	mango1 = new Mango(1000,200,20)
	mango2 = new Mango(900,220,20)
	mango3 = new Mango(1050,245,20)
	mango4 = new Mango(900,100,20)
	mango5 = new Mango(950,110,20)
	mango6 = new Mango(1100,145,20)
	mango7 = new Mango(1050,155,20)
	mango8 = new Mango(900,160,20)
	mango9 = new Mango(950,180,20)
	mango10 = new Mango(1000,145,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(173,190,275);
  drawSprites();
  ground.display()
  tree.display();
  chain.display();
  stone.display();
  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display();
  mango5.display(); 
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display(); 
  mango10.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
   }
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
  
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<=lmango.r+lstone.r)
   {
	 Matter.Body.setStatic(lmango.body , false);
   } 
  }