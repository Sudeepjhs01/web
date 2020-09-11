
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

document.querySelectorAll("button")[i].addEventListener("click", function () {
  var buttom = this.innerHTML;
  SoundPlay(buttom);
  Animation(buttom);
});
}
function SoundPlay(buttom)
{
  switch (buttom) {
    case "w":var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
        break;
    case "a":var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;
    case "s":var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;
    case "d":var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;
    case "j":var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;
    case "k":var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;
    case "l":var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;
    default:console.log('invalid option');
  }
}
document.addEventListener("keypress", function(event){
  SoundPlay(event.key);
  Animation(event.key);
} )

function Animation(pressed)
{
  document.querySelector('.' + pressed).classList.add('pressed');
  setTimeout(function () {
    document.querySelector('.' + pressed).classList.remove('pressed');
  }, 100);
}
