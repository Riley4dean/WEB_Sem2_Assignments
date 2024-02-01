function mouseOverHandler() {
    document.getElementById("demo").innerHTML = "Hello Again"
}

function mouseOutHandler() {
    document.getElementById("kitties").hidden = false;
}

function keyDownHandler() {
    document.getElementById("demo").innerHTML = "HI"
}

function keyUpHandler() {
    document.getElementById("kitties").hidden = true;
}