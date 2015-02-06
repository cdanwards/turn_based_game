$(document).ready(function() {


// Begin code for the character select screen

// Establishing variables
var start = new Audio('sounds/yeah.mp3');
var $characterOutput = $('.character-select');

//Templates
var renderCharacterTemplate = _.template($('.character-select').html());


$('.start').on('click', function(){
  start.play();
  $(".start-screen-container").hide();

  function renderTemplate(characterData){
  $characterOutput.append(renderCharacterTemplate(characterData));
  }
});


});
