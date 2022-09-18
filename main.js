function preload() {

}
function setup() {
    canvas = createCanvas(400, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 350);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}
function modelLoaded() {
    console.log("PoseNet is initialized.");
}
function gotPose(result) {
    if (result.length > 0) {
        console.log(result);
        console.log(result[0].pose.nose.x);
        console.log(result[0].pose.nose.y);
    }
    else {
        console.error("There are no values in PoseNet array.");
    }
}
function draw() {
    image(video, 0, 0, 400, 350);
}
function takePicture() {
    save("realtime_moustache_filterApp");
}