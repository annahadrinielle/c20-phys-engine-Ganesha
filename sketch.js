
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;


function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01, 
    density: 0.2,
    isStatic: true
  }
   
   var ground_options ={
     isStatic: true
   };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myworld,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(myworld,ball);
  
}


function draw() 
{
  background('white');
  Engine.update(myengine);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}

