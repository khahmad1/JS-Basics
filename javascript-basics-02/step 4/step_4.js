
document.querySelector("button").onclick = function () {
var y = prompt ("Reset is pressed, clear all fields in the form");
if (y == "yes" ){
    document.getElementById("name").value="";
    document.getElementById("surname").value="";
    document.getElementById("city").value="";
    alert("all fields are cleared" );
}
else 
 {

    alert("field not cleard ");
}

};