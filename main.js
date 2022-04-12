function setup(){
    canvas = createCanvas(548, 411);
    canvas.center();

    video = createCapture(VIDEO);
    video.position(100, 500);
    video.size(320, 280);

    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', got_result);
}

function model_loaded(){
    console.log('Posenet Model Loaded');
}

function got_result(results){
    if(results.length > 0){
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);
        console.log(`Left Wrist X = ${left_wrist_x} | Right Wrist X = ${right_wrist_x} | Difference = ${difference} |`);
    }
}

function draw(){
    background('darkblue');
    textSize(difference);
    fill('white');
    text('Devansh Pathak', 150, 202);
}