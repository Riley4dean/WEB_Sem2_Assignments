let number1 = prompt("Enter a number: ");
let number2 = prompt("Enter a second number: ");
number1 = +number1;
number2 = +number2;
sum = number1 + +number2;
difference = number1 - number2;
product = number1 * number2;
quotient = number1 / number2;
mod = number1 % number2;


document.getElementById("sum").innerHTML = sum;
document.getElementById("difference").innerHTML = difference;
document.getElementById("product").innerHTML = product;
document.getElementById("quotient").innerHTML = quotient;
document.getElementById("mod").innerHTML = mod;