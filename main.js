var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup(){
    canvas = createCanvas(550, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is initialized!")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background("#68cbfe");
    textSize(difference);
    fill("#02C39A");
    text("Dhanush", 50, 400);
    stroke("#02C39A");
    square(noseX, noseY, difference);
    document.getElementById("width_or_height").innerHTML = "The width and height of the square is = " + difference;
}