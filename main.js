//Canvas Basics
let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Variables
let cloudImg = document.getElementById("cloudImg");
let cloudImgX1 = 140;
let cloudImgX2 = 180;

//Circle Variable
let circleX = 350;
let circleYellow = 0;
let circleSize = 25;
let circleRed = 225;
let animate = true;

let frameCount = 0;

requestAnimationFrame(loop);
function loop() {

    frameCount++;
    console.log(frameCount)

    if (animate){

        if(circleSize <= 60){
        //Circle
        circleSize += .25;
    }
    circleYellow +=5;
    circleX -= 3;



        //Cloud
        cloudImgX1 -= 1;
        cloudImgX2 += 1;
   
    }

    
//Background Color
ctx.strokeStyle = "blue";
ctx.fillStyle = "rgb(0, 0, 225)";

//Background
ctx.fillRect(0, 0, 400, 400);


//Circle
ctx.fillStyle = "rgb("+ circleRed +", "+ circleYellow +", 0)";
ctx.beginPath();
ctx.arc(200, circleX, circleSize, 0, 2 * Math.PI);
ctx.fill();
requestAnimationFrame(loop);

//Green Block
ctx.strokeStyle = "green";
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(0, 300, 400, 400);

//Cloud Image
ctx.drawImage(cloudImg, cloudImgX1, 100);
ctx.drawImage(cloudImg, cloudImgX2, 80);



function keydownHandler (event) {
    console.log(event.code);
    if (event.code == "Space") {
        animate = !animate;
    }

}
}


