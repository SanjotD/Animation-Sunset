//Canvas Basics
let cnv = document.getElementById("canv");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Img 
let cloudImg = document.getElementById("cloudImg");


//Background Color
ctx.strokeStyle = "blue";
ctx.fillStyle = "rgb(0, 0, 225)";

//Background
ctx.fillRect(0, 0, 400, 400);

//Circle
ctx.fillStyle = "red";
ctx.strokeStyle = "rgb(225, 0, 0)";
ctx.beginPath();
ctx.arc(200, 300, 25, 0, 2 * Math.PI);
ctx.fill();

//Green Block
ctx.strokeStyle = "green";
ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(0, 300, 400, 400);

//Cloud Image
ctx.drawImage(cloudImg, 140, 100);
ctx.drawImage(cloudImg, 180, 80);