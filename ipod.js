var playButton = document.querySelector(".ipodbutton");

var audio = new Audio("ipod-sound.mp3");

function play() {
  console.log(audio);
  if (!audio.paused) {
    return audio.pause();
  }
  audio.play();
}

playButton.addEventListener("click", play);