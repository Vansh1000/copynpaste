function preload(){

noseX = 0
noseY = 0

function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCanvas(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);


}

function take_snapshot(){
    save("img.png");
}

function modelLoaded(){
    console.log("PoseNet is initialised")
}


function gotPoses(results){

    if(results.lenght > 0){

        console.log(results);

        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}