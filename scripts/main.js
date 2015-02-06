$(document).ready(function() {

// Audio for start screen

var start = new Audio('sounds/yeah.mp3');

$('.start').on('click', function(){
  start.play();
  $(".start-screen-container").hide();
});

});
