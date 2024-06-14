x = 0;
y = 0;
diffrence = 0;
rightWrist = 0;
leftWristX = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecogtion = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; + content
    recognition.start
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: "; + content
    if(content =="circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        draw_circle = "set";
    }
    if(content =="rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        draw_circle = "set";
    }
}


function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    background('#969A97')
    fill('#F90093');
    if (draw_circle == "set")
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY " +noseY)

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWrist);

        console.log("leftWristX = " + leftWristX + " + rightWristX = " + rightWristX + " difference = "+ difference);
    }
}
function draw() {
    background('#969A97')
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, diffrence);
}