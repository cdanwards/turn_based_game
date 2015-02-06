$(document).ready(function() {

  // Code for the start screen


  // Audio for start screen
  var start = new Audio('sounds/yeah.mp3');

    $('.start').on('click', function(){
      start.play();
      $(".start-screen-container").hide();
  });

  // Begin code for the character select screen

  // Establishing variables
  var $characterOutput = $('.character-select');

  //Templates
  var renderCharacterTemplate = _.template($('.character-select').html());

  var start = new Audio('sounds/yeah.mp3');

  $('.start').on('click', function(){
    start.play();
    $(".start-screen-container").hide();
    function(characterData){
    $characterOutput.append(renderCharacterTemplate(characterData));
  });

});
