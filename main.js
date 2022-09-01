canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

marsarray=["m1.jpeg","m2.jpg","m3.jpg","m4.jpg"];
r=Math.floor(Math.random()*4);
console.log(r);
background_image=marsarray[r];
rover_image="rover.png";
roverX=10;
roverY=10;
roverWidth=100;
roverHeight=90;

function a(){
    x=new Image();
    x.onload=p;
    x.src=background_image;

    y= new Image();
    y.onload=t;
    y.src=rover_image;
}

function p(){
    ctx.drawImage(x,0,0,canvas.width,canvas.height);
}

function t(){
    ctx.drawImage(y,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='38'){
    up();
console.log("up");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
if(keypressed=='40'){
    down();
    console.log("down");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
}

function up(){
    if(roverY>=0){
roverY=roverY-10;
p();
t();
    }

} 

function down(){
    if(roverY<=500){
roverY=roverY+10;
p();
t();
    }

}

function left(){
    if(roverX>=0){
roverX=roverX-10;
p();
t();
    }

}

function right(){
    if(roverX<=700){
roverX=roverX+10;
p();
t();
    }

}