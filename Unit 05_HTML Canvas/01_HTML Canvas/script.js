function toRadians(angDegrees) {
    return angDegrees * Math.PI / 180;
}


function drawCircle() {
    let startAngle = +document.getElementById("startAngle").value;
    let endAngle = +document.getElementById("endAngle").value;
    let radius = +document.getElementById("radius").value;
    let centerX = +document.getElementById("centerX").value;
    let centerY = +document.getElementById("centerY").value;
    let ccw = document.getElementById("ccw").checked;


    startAngle = toRadians(startAngle);
    endAngle = toRadians(endAngle);


    const canvas = document.getElementById("myCanvas1");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, ccw);
    ctx.stroke();
}

function drawLine() {
    let startX = +document.getElementById("startX").value;
    let startY = +document.getElementById("startY").value;
    let endX = +document.getElementById("endX").value;
    let endY = +document.getElementById("endY").value;

    const canvas = document.getElementById("myCanvas2");
    const ctx = canvas.getContext("2d");

    // Define a new Path:
    ctx.beginPath();

    // Define a start Point
    ctx.moveTo(startX, startY);

    // Define an end Point
    ctx.lineTo(endX, endY);

    // Stroke it (Do the Drawing)
    ctx.stroke();
}
function drawLinGrad(){
    var canvas = document.getElementById("myCanvas3");


    var ctxr = canvas.getContext("2d");


    let LengthX = +document.getElementById("LengthX").value;
    let LengthY = +document.getElementById("LengthY").value;
    let WidthX = +document.getElementById("WidthX").value;
    let WidthY = +document.getElementById("WidthY").value;
    let HeightX = +document.getElementById("HeightX").value;
    let HeightY = +document.getElementById("HeightY").value;
    var grd = ctxr.createRadialGradient(LengthX, LengthY, WidthX, WidthY, HeightX, HeightY);
    grd.addColorStop(.5, "lightblue");
       grd.addColorStop(1, "darkblue");

    ctxr.clearRect(0, 0, canvas.width, canvas.height);
    ctxr.beginPath();
    ctxr.stroke();

    ctxr.fillRect(LengthX, LengthY, WidthX, WidthY, HeightX, HeightY);
}
