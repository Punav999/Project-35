class Food{
    constructor(){

    this.image= loadImage("images/Milk.png");
    this.foodStock;
    this.lastFed;
    }

    display(){
        var x = 80;
        var y = 100;
        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;i<this.foodstock;i++){
                if(i%10==0){
                    x=80
                    y=y+50;
                }
            }
            image(this.image,x,y,50,50);
            x=x+30;
        }
    }
     getFoodStock(){
         return this.foodStock;
        
     }
     updateFoodStock(foodStock){
         this.foodStock=foodStock;
     }

     fedTime(lastFed){
        this.lastFed=lastFed;
     }
}