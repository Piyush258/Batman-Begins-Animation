class Drops{
    constructor(x,y){
        var options = {
            static:false,
            restitution:0.1,
            friction:0.001
        }
        this.body = Bodies.circle(x,y,5,options);
        this.x = x;
        this.y = y;
        this.r = 5;
        World.add(world, this.body);
    }
    update(){
if(this.body.position.y > 800){
    Matter.Body.setPosition(this.body,{x:random(0,750),y:random(0,600)});
}
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}