function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(200, 200);

    video = createCapture(VIDEO);
    video.position(100,500);
    video.size(320, 240);

    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', got_result);
}

function model_loaded(){
    console.log('Posenet Model Loaded');
}

function got_result(results){
    if(results.length > 0){
        console.log(results);
    }
}