(function(){
  'use strict';

$(document).ready(function() {


// Domain / Data

// Variables

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
$('.start').on('click', function(){  //Interaction and Application State
  sounds.start.play(); // Interaction / Application State
  $(".start-screen-container").hide(); //Application State

  function renderTemplate(characterData){
    $characterOutput.append(renderCharacterTemplate(characterData));
  }
  renderTemplate(); //Application State

$('#fight-button').on('click',function(){ //Interaction and Application State
  selectedCharacter = charactersObject[charClicked];
    $(".character-screen").hide(); //Application State

    function renderTemplate(data){
      $fightOutput.append(renderFightTemplate(data));
    }
    renderTemplate(); //Application State

    $('.selected-character-fight').addClass(charClicked + '-background'); //Interaction and Application State

    randomEnemy = _.sample(villains);
    var enemyClass = randomEnemy.class;
    $('#opponent-fight').addClass(enemyClass); //Application State

    $("#theme-song").detach(); // Interaction / Application State
    sounds.fightSong.play(); // Interaction / Application State

  });
});

var characterNames = ["mordecai", "rigby", "benson", "pops", "skips", "muscleman"]; // Domain / Data
var playerFight; // Domain / Data
characterNames.forEach(function(char) {
  $characterOutput.on('click', '.'+char, function(e) { //Presentation / Interaction
    $('#selected-character').removeClass().addClass(char + '-background').attr('data-value', char + 'Character'); //Application State
      playerFight =  $('.selected-character-fight').addClass(char + '-background').attr('value', char + 'Character'); //Application State
      sounds[char].play(); //Application State
      charClicked = char;
    });
});


//Fight Screen
$fightOutput.on('click', ".punchies-button", function(){ // Interaction and Application State

  sounds.punch.play(); // Interaction / Application State

  var punchbtn = $(".punchies-button"); // Presentation / Interaction
      punchbtn.addClass('hidden'); // disable button
      setTimeout(function() {
         punchbtn.removeClass('hidden'); // enable button
      }, 1000);

  var attack = (_.random(selectedCharacter.attackLower, selectedCharacter.attackUpper)); // Domain / Data
  randomEnemy.health -= attack;

  var enemyAttack = (_.random(randomEnemy.attackLower, randomEnemy.attackUpper)); // Domain / Data
  selectedCharacter.health -= enemyAttack;

  $('#character-health').attr('value', selectedCharacter.health); // Presentation / Interaction
  $('#opponent-health').attr('value', randomEnemy.health); // Presentation / Interaction

  if (randomEnemy.health <= 0 || selectedCharacter.health < 0) { // Interaction and Application State
    $(".title").hide();
    $(".fight-box-container").hide();
    $(".health-bars").hide();
    $(".punchies-button-container").hide();
    sounds.fightSong.pause(); 
    $gameOverOutPut.append(renderGameOverTemplate);
  }

  if (selectedCharacter.health <= 0) { // Interaction and Application State
    $(".you-win").addClass('hidden');
    sounds.lose.play();
  } else if (randomEnemy.health <= 0) {
    $(".you-lose").addClass('hidden');
    sounds.win.play();
  }


});

$gameOverOutPut.on('click', ".reset-button", function(){ // Interaction and Application State
  location.reload();
});

});

})();
