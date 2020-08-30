var shirt;
var button;
var pocket;
var collar;

function preLoad(){
  
}


function setup() {
  createCanvas(900,800);
  database=firebase.database();
  
  shirt=new Shirt(600,200,300,300);
 
}

function draw() {
  background(255,255,255);  

  shirt.display();
 
}
