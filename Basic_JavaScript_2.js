function displayDate() {
    document.getElementById("demo").innerHTML = Date();
} 

function myFunctions() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}

function myFunction(p1, p2) {
    return p1 * p2; 
}
document.getElementById("demo1").innerHTML = myFunction(5, 3);

function testing() {
    document.getElementById("demo2").innerHTML = "Hello World";
}
