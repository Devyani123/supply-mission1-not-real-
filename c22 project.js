const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={isStatic: true}
    var options1 = {restitution:2}

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);
    console.log(ground);

    box=Bodies.rectangle(300,200,50,50,options1);
    World.add (world,box);
    console.log(box);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rect(box.position.x,box.position.y,50,50)
}