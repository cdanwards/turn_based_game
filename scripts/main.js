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
    $('.selected-character-fight').addClass(charClicked + '-background');

    randomEnemy = _.sample(villains);
    var enemyClass = randomEnemy.class;
    $('#opponent-fight').addClass(enemyClass);

    console.log(randomEnemy);

  });
});


$fightOutput.on('click', ".punchies-button", function(){
  var attack = (_.random(selectedCharacter.attackLower, selectedCharacter.attackUpper));
  randomEnemy.health -= attack;

  var enemyAttack = (_.random(randomEnemy.attackLower, randomEnemy.attackUpper));
  selectedCharacter.health -= enemyAttack;

  $('#character-health').attr('value', selectedCharacter.health);
  $('#opponent-health').attr('value', randomEnemy.health);

  if (randomEnemy.health <= 0) {
    alert('You rock at punchies!');
  } else if (selectedCharacter.health < 0) {
    alert("You're not so great at punchies...LOSER!");
  }

  console.log('Enemies health: ' + randomEnemy.health);
  console.log('Your health: ' + selectedCharacter.health);

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
