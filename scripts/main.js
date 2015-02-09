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
  muscleman : new Audio('sounds/muscleman.mp3'),
  fightSong : new Audio('sounds/battletheme.mp3'),
  punch : new Audio('sounds/punchies.wav'),
  win : new Audio('sounds/win.mp3'),
  lose : new Audio('sounds/lose.mp3')
};

var audioLevel = document.getElementById("theme-song");
audioLevel.volume = 0.5;

var selectedCharacter;
var charClicked;
var randomEnemy;


//Templates
var $characterOutput = $('.character-screen');
var $fightOutput = $('.fight-screen');
var $gameOverOutPut = $('.game-over-screen');

var renderCharacterTemplate = _.template($('.character-select').html());
var renderFightTemplate = _.template($('.fight-screen-container').html());
var renderGameOverTemplate = _.template($('.game-over-screen-container').html());

// Character select screen
$('.start').on('click', function(){
  sounds.start.play();
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

    $("#theme-song").detach();
    sounds.fightSong.play();

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


//Fight Screen
$fightOutput.on('click', ".punchies-button", function(){

  sounds.punch.play();

  var punchbtn = $(".punchies-button");
      punchbtn.addClass('hidden'); // disable button
      setTimeout(function() {
         punchbtn.removeClass('hidden'); // enable button
      }, 1000);

  var attack = (_.random(selectedCharacter.attackLower, selectedCharacter.attackUpper));
  randomEnemy.health -= attack;

  var enemyAttack = (_.random(randomEnemy.attackLower, randomEnemy.attackUpper));
  selectedCharacter.health -= enemyAttack;

  $('#character-health').attr('value', selectedCharacter.health);
  $('#opponent-health').attr('value', randomEnemy.health);

  if (randomEnemy.health <= 0 || selectedCharacter.health < 0) {
    $(".title").hide();
    $(".fight-box-container").hide();
    $(".health-bars").hide();
    $(".punchies-button-container").hide();
    sounds.fightSong.pause();
    $gameOverOutPut.append(renderGameOverTemplate);
  }

  if (selectedCharacter.health <= 0) {
    $(".you-win").addClass('hidden');
    sounds.lose.play();
  } else if (randomEnemy.health <= 0) {
    $(".you-lose").addClass('hidden');
    sounds.win.play();
  }

  console.log('Enemies health: ' + randomEnemy.health);
  console.log('Your health: ' + selectedCharacter.health);

});

$gameOverOutPut.on('click', ".reset-button", function(){
  location.reload();
});

});

})();
