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

// Character select div
var $characterOutput = $('.character-screen');

//Template
var renderCharacterTemplate = _.template($('.character-select').html());

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
  });
});

// $characterOutput.on('click', '.mordecai', function() {
//   // alert('clicked');
//   $('.selected-character').addClass('mordecai-background');
// });
//

var characterNames = ["mordecai", "rigby", "benson", "pops", "skips", "muscleman"];

characterNames.forEach(function(char) {
    $characterOutput.on('click', '.'+char, function(e) {
        // alert('click on ' + char + '!');
        $('#selected-character').removeClass().addClass(char + '-background').attr('value', char + 'Character');

        eval(char).play();
    });
});


});

})();
