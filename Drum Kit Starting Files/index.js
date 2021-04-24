// document.querySelector("button").addEventListener("click", handleClick); //NO BRACKETS IN FUNCTION HERE!
//
// function handleClick() {
//   alert("ich bin geklukt");
// }


//ANONYMOUS FUNCTION
// document.querySelector("button").addEventListener("click", function() {
//   alert("Ich bin geklukt!");
// })

//ADD TO ALL BUTTONS
var allDrumPads = document.querySelectorAll(".drum");

for(var i = 0; i < allDrumPads.length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

console.log(this.style.color = "white");
});

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
