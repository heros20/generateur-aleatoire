
var choice = ["OUI!","NON!"] 



function generator2() {
 document.getElementById("choice").innerHTML = choice[Math.floor(Math.random() * choice.length)];
}