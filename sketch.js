const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, bg;

function preload() {
    getBackgroundImg();
}

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    stroke("#000000")
    textSize(40);
    textFont("Algerian");
    fill("#00ff2e");
    text("Sunrise and Sunset Animation", 20, 50);
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var rjson = await response.json();
    var date = rjson.datetime;
    var hour = date.slice(11, 13);
    console.log(hour);
    if(hour>=00 && hour<=02){
        bg = "Sprites/sunrise1.png";
    }else if(hour>=02 && hour<=04){
        bg = "Sprites/sunrise2.png";
    }else if(hour>=04 && hour<=06){
        bg = "Sprites/sunrise3.png";
    }else if(hour>=06 && hour<=08){
        bg = "Sprites/sunrise4.png";
    }else if(hour>=08 && hour<=10){
        bg = "Sprites/sunrise5.png";
    }else if(hour>=10 && hour<=12){
        bg = "Sprites/sunrise6.png";
    }else if(hour>=12 && hour<=14){
        bg = "Sprites/sunset7.png";
    }else if(hour>=14 && hour<=16){
        bg = "Sprites/sunset8.png";
    }else if(hour>=16 && hour<=18){
        bg = "Sprites/sunset9.png";
    }else if(hour>=18 && hour<=20){
        bg = "Sprites/sunset10.png";
    }else if(hour>=20 && hour<=22){
        bg = "Sprites/sunset11.png";
    }else{
        bg = "Sprites/sunset12.png";
    }
    backgroundImg = loadImage(bg);
}
