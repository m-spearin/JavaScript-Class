function addition_Function() {
    var addition = 3 + 4;
    document.getElementById("Math").innerHTML = "3 + 4 = " + addition;
}

function subtraction_Function() {
    var subtraction = 4 - 3;
    document.getElementById("Math1").innerHTML = "4 - 3 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 4 * 3;
    document.getElementById("Math2").innerHTML = "4 * 3 = " + multiplication;
}

function division_Function() { 
    var division = 3 / 3;
    document.getElementById("Math3").innerHTML = "3 / 3 = " + division;
}

function moreMath_Function() {
    var math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math4").innerHTML = "( 1 + 2 ) * 10 / 2 - 5 = " + math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math5").innerHTML = "When you divide 25 by 6 you havbe a remainder of: " + simple_Math;
}

function unary_Function() {
    var x = 10;
    document.getElementById("Math6").innerHTML = -x;
}

function increment_Function() {
    var F = 5;
    F++
    document.getElementById("Math7").innerHTML = F;
}

function decrement_Function() {
    var G = 5;
    G--
    document.getElementById("Math8").innerHTML = G;    
}

function random_Function() {
    window.alert(Math.random() * 100);
}

function square_Function() {
    document.getElementById("Math9").innerHTML = Math.sqrt(64);

}