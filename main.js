leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100)

    canvas = createCanvas(550, 500);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose' ,gotPoses);
}

function draw(){
    background('#dfbbfb');
    textSize(difference);
    fill('#1a1a50');
    text('Sera', 50, 400)
}

function modelLoaded(){
    console.log("PoseNet is intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWRistX = "+ leftWristX);
        console.log("RightWRistX = "+ rightWristX);
        console.log("Difference = "+ difference);
    }
}