//Create variables here
var dog,happyDog,sadDog;
var foodStock,foods;
var database;
var lastFed,foodObject;

function preload()
{
  sadDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database()
   
  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  dog=createSprite(400,400)
  dog.addImage(happyDog);
  dog.scale=0.5;
  foodObject=new Food();

  feed=createButton("Feed Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog)
  
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87);

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("lastFed : "+lastFed%12 + "PM", 350,30);
}else if(lastFed==0){
  text("last Fed :" + 12 +" AM",350,30);
}else{
  text("Last Fed : "+ lastFed + " AM", 350,30);
}

foodObject.display()
feedTime=database.ref('Feedtime')
feedTime.on("value",(data)=>{
  lastFed=data.val()
})
  drawSprites();
  //add styles here
textSize(20);
fill("white")
text("To feed the dog press UP_ARROW key",40,50)
text("Food= "+foods,200,100)
}

function readStock(data){
  foods=data.val();
  foodObject.updateFoodStock(foods);
 
}

function writeStock(x){
  
  database.ref('/').update({
    food:x
  })
}
function addFoods(){
   foods++;
   database.ref('/').update({ Food : foods });
   } 
   function feedDog(){
      dog.addImage(happyDog); 
      foodObject.updateFoodStock(foodObject.foodStock-1);
       database.ref('/').update({ Food : foodObject.foodStock, 
        FeedTime : hour()
      }); 
    }
