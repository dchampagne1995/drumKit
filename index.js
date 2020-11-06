// Detecing mouse clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonHtml = this.innerHTML;
    determineKey(buttonHtml);
    buttonFlash(buttonHtml);
  });
}

//Detecing key press
document.addEventListener("keypress", function(event) {
  determineKey(event.key);
  buttonFlash(event.key);
});

// Determining which key was pressed to match sound
function determineKey(key) {

  switch (key) {

    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "a":
      var kick1 = new Audio('sounds/kick-bass.mp3');
      kick1.play();
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
      console.log(buttonHtml);
  }
}

// Including button flashing animation
function buttonFlash(key) {
  var currentBtn = document.querySelector("." + key);
  currentBtn.classList.add("pressed");

  setTimeout(function() {
    currentBtn.classList.remove("pressed");
  }, 100)
}
