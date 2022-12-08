//  document.querySelector("body").onclick = function  () {
//     var show = document.getElementById("show");
//     var hide = document.getElementById("hide");
//     var z = document.getElementById("texte");

//     if (hide.onclick) {
//         z.style.display = "none";
//     } 
//     else (show.onclick ) 
//     {
//         z.style.display= "block";
   
// };

// }


var link = document.querySelectorAll("a")
var text = document.getElementById("texte")

link.forEach((e) => {
    e.addEventListener("click", (e) => {
        if (e.target.id == "show") {
            text.style = "display: block;"
        } else {
            text.style = "display: none;"
        }
    })
})