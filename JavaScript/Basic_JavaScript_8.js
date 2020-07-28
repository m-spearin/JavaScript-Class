function full_Sentence() { 
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper() {
    var text = "This should all be uppercase!";
    var test = text.toUpperCase();
    document.getElementById("upper_case").innerHTML = test;
}

function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);

}

function fixed_Method() { 
    var Y = 7.211654;
    var h = Y.toFixed(2);
    document.getElementById("Fixed").innerHTML = h;
}

function value_Method() { 
    var a = 45;
    var b = a.valueOf();
    document.getElementById("Value").innerHTML = b;
}