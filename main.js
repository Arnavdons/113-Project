function preload(){

}

function setup(){
canvas=createCanvas(650,500);
canvas.position(150,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw(){
image(video,200,150,200,200);
tint(tint_color);


fill("green");
stroke("green");
rect(80,35,460,20);

fill("green");
stroke("green");
rect(80,435,460,20);

fill("green");
stroke("green");
rect(42.5,75,20,350);


fill("green");
stroke("green");
rect(543,75,20,350);




fill("red");
stroke("red");
circle(50,50,70);

fill("red");
stroke("red");
circle(550,450,70);

fill("red");
stroke("red");
circle(550,50,70);

fill("red");
stroke("red");
circle(50,450,70);
}

function take_snapshot(){
save("image.png");
}