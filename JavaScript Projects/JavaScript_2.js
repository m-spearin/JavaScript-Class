function validateForm () {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var a = document.forms["myForm"]["phone"].value;
    var b = document.forms["myForm"]["notes"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false; 
    }
    
    
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }

    if (a == "") {
        alert("Phone number is needed to get in touch");
        return false;
    }

    if (b == "") {
        alert("Please enter your notes in the field");
        return false;
    }else alert("Thank you very much for submitting the form. We will be in touch shortly!");


}

