class Umbrella{
    constructor(x,y){
   var options={
       isStatic:true
   }
        this.body = Bodies.circle(x,y,50,options);
        this.x = x;
        this.y = y;
        this.r = 50;
        this.image = loadImage("Umbrella.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //fill("red");
        //ellipseMode(RADIUS);
        //ellipse(pos.x,pos.y,this.r,this.r);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,100,100);
    }
}