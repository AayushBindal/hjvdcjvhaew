var dog, sadDog, happyDog;
var bottleImage;
var bottle;
var count = 0;
var fed = 0;

var button, button2;

function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  bottleImage = loadImage("Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  database = firebase.database();

  form = new Form();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
}

function draw() {
  background(46,139,87);

  drawSprites();
  form.display();
  form.textTime();
}