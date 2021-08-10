const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint

var engine, world;
var ball;
var chain;
var backgroundImage 

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

ball=new Ball(300,200,100)

ground=new Ground(600,350,1200,50)

chain=new Rope(ball.body,{x:300,y:100})

basket=new Basket(1100,100,200,200)

}

function draw(){
    background("black");
    Engine.update(engine);
    
ball.display()

ground.display()

chain.display()

basket.display()
}


function mouseDragged()
{
Matter.Body.setPosition(ball.body,{x:100,y:100})

}

function mouseReleased()
{
chain.fly()

}





