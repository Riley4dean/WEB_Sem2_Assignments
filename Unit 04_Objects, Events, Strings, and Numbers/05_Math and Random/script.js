function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;
    
}

function takeAbsoluteValue(){
    let number = +document.getElementById("input2").value;
    

    let absoluteValue = Math.abs(number);
    document.getElementById("result2").innerHTML = absoluteValue;
}

function takeCos(){
    let number = +document.getElementById("input3").value;
    let Cos = Math.cos(number);
    document.getElementById("result3").innerHTML = Cos;
}
function takeSin(){
    let number = +document.getElementById("input4").value;
    let Sin = Math.sign(number);
    document.getElementById("result4").innerHTML = Sin;
}
function takeTan(){
    let number = +document.getElementById("input5").value;
    let tan = Math.tan(number);
    document.getElementById("result5").innerHTML = tan;
}


