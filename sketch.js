const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
  createCanvas(windowWidth/2, windowHeight/1.5);
  engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = Matter.MouseConstraint.create(engine, options);
  World.add(world,mConstraint);

  bob1 = new Pendulum(100, 350);
	bob2 = new Pendulum(200, 350);
	bob3 = new Pendulum(300, 350);
	bob4 = new Pendulum(400, 350);
	bob5 = new Pendulum(500, 350);
	rope1 = new Sling(bob1.body, {x:100, y:80});
	rope2 = new Sling(bob2.body, {x:200, y:80});
	rope3 = new Sling(bob3.body, {x:300, y:80});
	rope4 = new Sling(bob4.body, {x:400, y:80});
  rope5 = new Sling(bob5.body, {x:500, y:80});

  Engine.run(engine);    
}
 
function draw() {
  background(0);
  Engine.update(engine);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setposition(pendulum.body, {x:mouseX, y:mouseY});
}