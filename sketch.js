const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, base1, block1, block2, block3, block4, block5, block6, block7, block8, block9, polygon;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
    world = engine.world;
    
    // Creating the sprites/bodies
    
    ground = new Ground(600,height,1200,20);

    // w = 170, h= 10, y = 240, x= 390

    polygon = new Polygon(50,240,50,50);
    
    base1 = new Ground(390,240,170,10);

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);

    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);

    block9 = new Block(390,155,30,40);

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  background(230);

 // Displaying the sprites/bodies

 polygon.display()

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();

}

function mouseDragged(){

  Matter.Body.setPosition (bird1.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){

  polygon.fly();

}