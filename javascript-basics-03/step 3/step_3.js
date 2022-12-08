var green = document.querySelector(".green");
var red  = document.querySelector(".red");
var blue  = document.querySelector(".blue");
var p  = document.getElementById("text");

green.onclick = function () 
{
  p.style.color = "green";
};

red.onclick = function () {
  p.style.color = "red";
};

blue.onclick = function () {
  p.style.color = "blue";
};