var X = 10
function Add_numbers_1() {
    document.write(20 + X + "<br>");

}
function Add_numbers_2() {
    document.write(X + 100);

}
Add_numbers_1();
Add_numbers_2();



if (1 < 2) {
    document.wrie("The left number is smaller the the right.")
}

function get_Date() {
    if (new Date().getHours() < 8) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    
}

function Testing () { 
    if (123 < 124) {
        document.getElementById("test").innerHTML = "You are correct! 123 is less then 124";
    }
}

function Wrong () {
    document.getElementById("wrong").innerHTML = "Sorry you are wrong";
}

function Age_Function () { 
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
           
    
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Retire () {
    Age = document.getElementById("info").value;
    if (Age >= 65) {
        Info = "Congrats! You can retire!"
    }
    else {
        Info = "Sorry you cant retire. Get back to work!"
    }
    document.getElementById("retire?").innerHTML = Info;
}


function Time_function() { 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the Afternoon!";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

