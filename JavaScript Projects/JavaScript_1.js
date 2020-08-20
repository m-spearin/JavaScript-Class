function Car_Function () {
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great Car!";
    switch(Cars) {
        case "Ford":
            Car_Output = "Ford" + Car_String;
        break;
        case "Chevy":
            Car_Output = "Chevy" + Car_String;
        break;
        case "Dodge":
            Car_Output = "Dodge" + Car_String;
        break;
        case "Chrysler":
            Car_Output = "Chrysler" + Car_String;
        break;
        case "BMW":
            Car_Output = "BMW" + Car_String;
        break;
        case "VW":
            Car_Output = "VW" + Car_String;
        break;
        default:
            Car_Output = "Please enter a car ecactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Car_Output;
}

function Hello_World_Function() { 
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has Changed!"
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500,250);
ctx.stroke();

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 300, 200);
