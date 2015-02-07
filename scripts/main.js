(function(){
  'use strict';

$(document).ready(function() {

// Sounds
var start = new Audio('sounds/yeah.mp3');
var mordecai = new Audio('sounds/mordecai.mp3');
var rigby = new Audio('sounds/rigby.mp3');
var benson = new Audio('sounds/benson.mp3');
var pops = new Audio('sounds/pops.mp3');
var skips = new Audio('sounds/skips.mp3');
var muscleman = new Audio('sounds/muscleman.mp3');


// Selected character that is stored when a character is selected
var selectedCharacter;
var charBackground;

// Character select div
var $characterOutput = $('.character-screen');
var $fightOutput = $('.fight-screen');

//Template
var renderCharacterTemplate = _.template($('.character-select').html());
var renderFightTemplate = _.template($('.fight-screen-container').html());

// Character select screen
$('.start').on('click', function(){
  start.play();
  $(".theme-song").detach();
  $(".start-screen-container").hide();

  function renderTemplate(characterData){
    $characterOutput.append(renderCharacterTemplate(characterData));
  }
  renderTemplate();

  $('#fight-button').on('click',function(){
    selectedCharacter = $('#selected-character').attr('value');
    console.log(selectedCharacter);
    $(".character-screen").hide();

    function renderTemplate(data){
      $fightOutput.append(renderFightTemplate(data));
    }
    renderTemplate();
    $('.selected-character-fight').addClass(charBackground + '-background');


  });
});

// $characterOutput.on('click', '.mordecai', function() {
//   // alert('clicked');
//   $('.selected-character').addClass('mordecai-background');
// });
//

var characterNames = ["mordecai", "rigby", "benson", "pops", "skips", "muscleman"];
var playerFight;
characterNames.forEach(function(char) {
    $characterOutput.on('click', '.'+char, function(e) {
        // alert('click on ' + char + '!');
        $('#selected-character').removeClass().addClass(char + '-background').attr('value', char + 'Character');
        // playerFight =  $('.selected-character-fight').addClass(char + '-background').attr('value', char + 'Character');
        eval(char).play();
        charBackground = char;
        console.log(playerFight);
    });
});


});

})();
