function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}


function Age_Check() {
    var Age, Vote;
    Age = document.getElementById("Age").value;
    Vote = (Age < 18) ? "You are not old":"You are old";
    document.getElementById("Vote").innerHTML = Vote + " enough to vote!";

}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erick drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Computer(Make, Model, Year, Color) { 
    this.Computer_Make = Make;
    this.Computer_Model = Model;
    this.Computer_Year = Year; 
    this.Computer_Color = Color;

}

var Michael = new Computer("Apple", 2, 1977, "White");
var Vanessa = new Computer("IBM", 5100, 1975, "Grey");
var Charlotte = new Computer("Apple", "Macbook Pro", 2020, "Space Grey"); 
function Assignment() { 
    document.getElementById("New_and_This").innerHTML =
    "Vanessa thinks that her " + Vanessa.Computer_Make + Vanessa.Computer_Model +
    " Is better then Michael's " + Michael.Computer_Make + Michael.Computer_Model + " which she is wrong."
}


function count_Function() {
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {    
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
