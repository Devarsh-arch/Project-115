function preload(){

}
function setup(){
    canvas= createCanvas(600, 400);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(600, 400);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
}
function modelLoaded(){
    console.log("poseNet Is Working");
}
function draw(){

}
function takesnapshot(){
    save('Project.png');
}