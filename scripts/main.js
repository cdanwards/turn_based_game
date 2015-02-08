(function(){
  'use strict';

$(document).ready(function() {

//Variables

var sounds = {
  start : new Audio('sounds/yeah.mp3'),
  mordecai : new Audio('sounds/mordecai.mp3'),
  rigby : new Audio('sounds/rigby.mp3'),
  benson : new Audio('sounds/benson.mp3'),
  pops : new Audio('sounds/pops.mp3'),
  skips : new Audio('sounds/skips.mp3'),
  muscleman : new Audio('sounds/muscleman.mp3')
};

var selectedCharacter;
var charClicked;
var randomEnemy;

// Character select div
var $characterOutput = $('.character-screen');
var $fightOutput = $('.fight-screen');

//Template
var renderCharacterTemplate = _.template($('.character-select').html());
var renderFightTemplate = _.template($('.fight-screen-container').html());

// Character select screen
$('.start').on('click', function(){
  sounds.start.play();
  $(".theme-song").detach();
  $(".start-screen-container").hide();

  function renderTemplate(characterData){
    $characterOutput.append(renderCharacterTemplate(characterData));
  }
  renderTemplate();



$('#fight-button').on('click',function(){
  selectedCharacter = charactersObject[charClicked];
    $(".character-screen").hide();
    console.log(selectedCharacter);


    function renderTemplate(data){
      $fightOutput.append(renderFightTemplate(data));
    }
    renderTemplate();
    // $('#opponent-fight').addClass('summer-time');
    $('.selected-character-fight').addClass(charClicked + '-background');

    var randomEnemy = _.sample(villains);

    // Only first statement works when event listener is triggered 

    if (randomEnemy == villains.death) {
      $('#opponent-fight').addClass('death');

    } else if (randomEnemy == villains.summertimeSong) {
      $('.opponent-fight').addClass('summer-time');

    } else if (randomEnemy == villains.garrettBobbyFerguson) {
      $('.opponent-fight').addClass('garrett');

    } else if (randomEnemy == villains.iacedromAndYbigr) {
      $('.opponent-fight').addClass('iacedrom-and-ybgir');

    } else if (randomEnemy == villains.thomas) {
      $('.opponent-fight').addClass('thomas');

    } else {
      $('.opponent-fight').addClass('tmpc');
    }

    console.log(randomEnemy);

  });
});


var characterNames = ["mordecai", "rigby", "benson", "pops", "skips", "muscleman"];
var playerFight;
characterNames.forEach(function(char) {
  $characterOutput.on('click', '.'+char, function(e) {
    $('#selected-character').removeClass().addClass(char + '-background').attr('data-value', char + 'Character');
      playerFight =  $('.selected-character-fight').addClass(char + '-background').attr('value', char + 'Character');
      sounds[char].play();
      charClicked = char;
    });
});

});

})();
