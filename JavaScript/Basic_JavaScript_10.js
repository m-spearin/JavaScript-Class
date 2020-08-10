function Call_Loop () {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;

}

function myString () { 
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("test").innerHTML = n;

}

var Instruments = ["Guitar", "Drums","Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2];

}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"blanck", accessories:"Case"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The Cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + " It also comes with a " + Musical_Instrument.accessories;

}

function let_Function() { 
    var X = 17;
    document.write(X);
    {
        let X = 13;
        document.write("<br>" + X);
    
    }

    document.write("<br>" + X);
}

function return_Function() { 
    return Math.PI; 
}
document.getElementById("pi").innerHTML = return_Function();

let car = {
    make: "Ford ",
    model: "Mustang ",
    year: "1969 ",
    color: "Black ",
    description : function () { 
        return " The car is a " + this.year + this.color + this.make + this.model;

    }

};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";

}
document.getElementById("continue").innerHTML = text; 
