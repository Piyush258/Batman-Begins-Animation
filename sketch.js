const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops = [];
var maxDrop = 100;
var umbrella;
var batBoy;
var counter = 0;
var thunder;
var L1,L2;

function preload(){
    batBoy = loadAnimation("Boy 1.PNG","Boy 2.PNG","Boy 3.PNG","Boy 4.PNG","Boy 5.PNG");
    L1 = loadImage("L2.jpg");
    L2 = loadImage("Lightning.png");
}

function setup(){
    createCanvas(800,800);
    engine=Engine.create();
    world=engine.world;
    umbrella = new Umbrella(400, 600);
   // boy 
   // World.add(world, boy);
   boy = createSprite(400,700,200,300);
   boy.addAnimation("walking", batBoy);
    if(frameCount % 150 == 0){
     
        for(var i = 0; i < maxDrop; i++){
            drops.push(new Drops(random(50,750),random(50,750)));
        }
        
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var i = 0; i < maxDrop; i++){
        drops[i].display();
        drops[i].update();
    }
    rand = Math.round(random(1,2));
    if(frameCount % 80 == 0){
        counter = frameCount
        thunder = createSprite(random(50,700),random(40,100),10,10);
        switch(rand){
            case 1:thunder.addImage(L1);
            break;
            case 2:thunder.addImage(L2);
            break;
            default:
                break;
        }
        thunder.scale = random(0.8,2);
    }
    if(counter + 10 == frameCount && thunder){
        thunder.destroy();
    }
    drawSprites();
    umbrella.display();
    
}   

