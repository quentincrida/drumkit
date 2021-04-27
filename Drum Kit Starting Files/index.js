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



for (var i = 0; i < allDrumPads.length; i++) {

  //DETECT MOUSE CLICK AND PLAY APPROPRIATE SOUNDS
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);


  });

}

//DETECT KEYBOARD STROKES
document.addEventListener("keydown", function() {

  makeSound(event.key)


});

//CREATE FUNCTION LINKING KEY TO SPECIFIC DRUM SOUND
//*** key = JS property seen in DevTools Console
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log("buttonInnerHTML");

  }
}
