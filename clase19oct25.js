
var disp = document.getElementById("label");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var mas = document.getElementById("b+");
var igual = document.getElementById("b=");

b1.onclick = function() {
    var temp = disp.value;
    if (temp == 0) {
        disp.value = "1";
    } else {
        disp.value = temp + "1";
    };
}
