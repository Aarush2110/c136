Status = "";
input_text = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCanvas(VIDEO);
    video.size();
    video.hide();

}
function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("model_loaded");
    Status = true;
}
function draw(){
    Image(0,0,300,290);
   
}