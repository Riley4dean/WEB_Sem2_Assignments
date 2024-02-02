function mouseOverHandler() {
    document.getElementById("demo").innerHTML = "Hello Again"
}

function mouseOutHandler() {
    document.getElementById("kitties").hidden = false;
}

function keyDownHandler() {
    let x = 5
    let y = x + 7
    document.getElementById("demo").innerHTML = y
    
}

function keyUpHandler() {
    document.getElementById("demo").hidden = "Hai";
}

function onClickHandler(){
    document.getElementById("demo").innerHTML = "HAi";
}

function onChangeHandler(){
    document.getElementById("demo").hidden = false;
}

function onLoadHandler(){
    document.getElementById("demo").innerHTML = "Hello attack"
}
