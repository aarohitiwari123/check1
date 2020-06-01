
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1,ground1,box1,box2,box3;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,450,40);

	box1 = new Dustbin(900,647,220,25);
	box2 = new Dustbin(800,585,25,150);
	box3 = new Dustbin(1000,585,25,150);

	ground1 = new Ground(width/2,670,width,20)
	ground1.shapeColor=color(255)

	//Create a Ground
	//ground1 = Bodies.rectangle(width/2, 800, width, 100 , {isStatic:true} );
	var render = Render.create({
		element: document.body,
		engine : engine,
		options:{
			width : 1200,
			height : 700,
			wireframes: false
		}

});

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(34,35,35);
  
	paper1.display();
	ground1.display(); 
	box1.display();
	box2.display();
	box3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:45,y:-45})
	}
}

