var buttoncolor = ["red", "blue" , "green", "yellow"];
var gamepattern = [];
var started = false;
var randomChosenColour;
var level = 1;
$(document).keypress(function(event) {
   if (!started) {
      start();
      started = true;
   }
});

function nextsequence(){
  var randnumber = Math.floor(Math.random() *4);
  return randnumber;
}
function soundPlay(a)
{
  var name = new Audio ('sounds/'+ a +'.mp3');
  name.play();
}
var userclickpattern = [];
function start(){
userclickpattern = [];
$("#level-title").text("Level " + level);
randomChosenColour = nextsequence();
gamepattern.push(buttoncolor[randomChosenColour]);
$("#"+buttoncolor[randomChosenColour]).fadeOut(250).fadeIn(250);
soundPlay(buttoncolor[randomChosenColour]);
}
$(".btn").click(function() {
  var userChosenColour = this.getAttribute('id');
  this.classList.add('pressed');
  var p = $(this);
  setTimeout(function () {
    p.removeClass('pressed');
  }, 50);
  userclickpattern.push(userChosenColour);
  soundPlay(userChosenColour);
  console.log(userclickpattern);
  check(userclickpattern.length-1);
});
function check(currentLevel){
  if(userclickpattern[currentLevel]==gamepattern[currentLevel]){
    if(userclickpattern.length==gamepattern.length)
    {
        level++;
        start();
    }
  }
  else{
    $('body').addClass('game-over');
    soundPlay("wrong");
    setTimeout(function () {
      $('body').removeClass('game-over');
    }, 200);
    $("#level-title").text("Game-Over, Press Any Key to Play Again");
    
    level=1;
    gamepattern = [];
    started = false;
  }
}
