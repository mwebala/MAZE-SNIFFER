const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var bg_image
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;
var wall9, wall10, wall11, wall12, wall13;

function preload(){
bg_image = loadImage("house.jpg")

}

function setup() {
  //create the canvas
  createCanvas(1000,600);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  wall1 = new Ground(75, 450,150,15)
  wall2 = new Ground(75, 450,150,15)
  wall3 = new Ground(75, 450,150,15)
  wall4 = new Ground(75, 450,150,15)
  wall5 = new Ground(75, 450,150,15)
  wall6 = new Ground(75, 450,150,15)
  wall7 = new Ground(75, 450,150,15)
  wall8 = new Ground(75, 450,150,15)
  wall9 = new Ground(75, 450,150,15)
  wall10 = new Ground(75, 450,150,15)
  wall11= new Ground(75, 450,150,15)
  wall12 = new Ground(75, 450,150,15)
  wall13= new Ground(75, 450,150,15)
 
 

  




  
  }


function draw() {
  //set the background
  background(bg_image);  

  //update the engine
  Engine.update(engine);
   
  //display ground
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  wall5.display()
  wall6.display()
  wall7.display()
  wall8.display()
  wall9.display()
  wall10.display()
  wall11.display()
  wall12.display()
  wall13.display()


}

function keyPressed(){
 if(keyCode === 39 ){
  
 
 }
 if(keyCode === 38 ){
  
 
 }
 if(keyCode === 37 ){
  
 
 }
}
