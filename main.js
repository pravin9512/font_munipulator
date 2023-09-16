noseX=0
noseY=0
right_wristX=0
left_wristX=0
diffrence=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550,490)

    canvas=createCanvas(550,500)
    canvas.position(570,100)
    posenet= ml5.poseNet(video,modelloaded)

    posenet.on("pose", got_pose) 
}

function modelloaded(){
    console.log("pose net loaded successfuly")
}

function got_pose(results){
 if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
console.log("nose x="+noseX+" nose y="+noseY)
right_wristX=results[0].pose.rightWrist.x;
left_wristX=results[0].pose.leftWrist.x;
diffrence=floor(left_wristX-right_wristX)
 }

}

function draw(){
    background("#8c8c8c")
    document.getElementById("length_side").innerHTML="Font size of text will be= "+diffrence+"px"
fill("blue")
    text( "Pravin",100,200)
    textSize(diffrence)
}