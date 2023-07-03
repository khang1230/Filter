var mustacheX = 0
var mustacheY = 0

function preload(){
    mustache = loadImage("https://i.postimg.cc/sshfQbg3/m.png")
}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log("Model has Loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        mustacheX = results[0].pose.nose.x-175
        mustacheY = results[0].pose.nose.y-135
    }
}

function draw(){
    image(video,0,0,300,300)
    image(mustache, mustacheX, mustacheY, 25, 20)
}

function captureImg(){
    save("Filter_Image.png")
}