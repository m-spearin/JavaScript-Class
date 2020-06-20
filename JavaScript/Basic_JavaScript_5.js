function my_Function() {
    document.getElementById("test").innerHTML = (typeof "Word");
}

function my_Testing() {
    document.getElementById("NaN").innerHTML = 0/0;

}

function my_True() {
    document.getElementById("True").innerHTML = isNaN('This is a string');

}

function my_False() {
    document.getElementById("False").innerHTML = isNaN('0074');

}

function my_Infin() {
    document.getElementById("Infin").innerHTML = (2E310);

}

function my_neginfin() {
    document.getElementById("neginfin").innerHTML = (-2E310);
}

function my_TF() {
    document.getElementById("TF").innerHTML = (5 > 4);

}

console.log(2 + 2);

function my_IDK() { 
    document.getElementById("IDK").innerHTML = ("15" + 5);

}

console.log(5 < 4);

function my_True1() {
    document.getElementById("True1").innerHTML = (5 == 5);

}

function my_False1() {
    document.getElementById("False1").innerHTML = (4 == 5);
}

function my_True2() {
    var x = 82, y = 82;

    document.getElementById("True2").innerHTML = (x === y);
}

function my_False2() {
    var g = "True", h = "False";
    
    document.getElementById("False2").innerHTML = (g === h);
}

function my_False3() {
    var j = "one", k = 1;

    document.getElementById("False3").innerHTML = (j === k);

}

function my_False4() {
    var a = "one", b = "two";

    document.getElementById("False4").innerHTML = (a === b);
}

function my_True3() { 
    document.getElementById("True3").innerHTML = (5 > 2 && 7 > 1);
}

function my_False5() { 
    document.getElementById("False5").innerHTML = (5 > 2 && 7 > 10);

}

function my_True4() { 
    document.getElementById("True4").innerHTML = (1 > 5 || 8 > 2);

}

function my_False6() { 
    document.getElementById("False6").innerHTML = (1 > 3 || 5 > 10);
}

function my_True5() {
    document.getElementById("True5").innerHTML = !(1 > 2);

}

function my_False7() {
    document.getElementById("False7").innerHTML = !(4 > 3);
}