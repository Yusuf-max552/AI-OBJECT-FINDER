status = "";

function setup(){
  canvas = createCanvas(580, 480);
  canvas.center();
  
  video = createCapture(VIDEO);
  video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Model is detecting objects";
}
function modelLoaded(){
    console.log("Model is loaded");
    status = true;
}
function draw(){
    image = (video, 0, 0, 580, 480);
}