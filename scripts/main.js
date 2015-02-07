$(document).ready(function() {


// Begin code for the character select screen

// Establishing variables
var start = new Audio('sounds/yeah.mp3');
var $characterOutput = $('.character-screen');

//Templates
var renderCharacterTemplate = _.template($('.character-select').html());


$('.start').on('click', function(){
  start.play();
  $(".start-screen-container").hide();

  function renderTemplate(characterData){
    $characterOutput.append(renderCharacterTemplate(characterData));
  }
  renderTemplate();
});


// Character Select page

$('.mordecai').on('click', function(){
  $('.c-screen-player-box').addClass('mordecai');
});



});
