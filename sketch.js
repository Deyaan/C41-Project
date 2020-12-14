var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var divisions = [];
var divisionHeight = 200;

var particle;


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  man= new Man();
}
 
function draw() {
  background("black");

  Engine.update(engine);

   if(frameCount%10===0){
     particles.push(new Particle(random(10,780), 6,6));
   }
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
   }
     
    man.display();
  

}


function mousePressed(){
  if(gamestate!=="end"){
  particle=new Particle(mouseX,10,6,6);
  }
}
