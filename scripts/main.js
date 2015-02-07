(function(){
  'use strict';

$(document).ready(function() {

// Sounds
var sounds = {
  start : new Audio('sounds/yeah.mp3'),
  mordecai : new Audio('sounds/mordecai.mp3'),
  rigby : new Audio('sounds/rigby.mp3'),
  benson : new Audio('sounds/benson.mp3'),
  pops : new Audio('sounds/pops.mp3'),
  skips : new Audio('sounds/skips.mp3'),
  muscleman : new Audio('sounds/muscleman.mp3')
};

// Selected character that is stored when a character is selected
var selectedCharacter;
var charClicked;

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
        $('#selected-character').removeClass().addClass(char + '-background').attr('data-value', char + 'Character');
        playerFight =  $('.selected-character-fight').addClass(char + '-background').attr('value', char + 'Character');
        sounds[char].play();
        charClicked = char;
    });
});

//
// Character Constructors
//

var Character = function (options) {
  options = options || {};
  _.defaults(options, {
    attackUpper: 40,
    attackLower: 10,
    health: 100
  });
  _.extend(this, options);
};

var Villain = function (options) {
  options = options || {};
  _.defaults(options, {
    attack: _.random(10, 45),
    health: 100
  });
  _.extend(this, options);
};


var charactersObject = {
  mordecai : new Character({
    name: 'Mordecai'
  }),
  rigby : new Character({
    name: 'Rigby',
    shit: 'shit'
  }),
  benson : new Character({
    name: 'Benson'
  }),
  pops : new Character({
    name: 'pops'
  }),
  skips : new Character({
    name: 'Skips'
  }),
  muscleman : new Character({
    name: 'Muscleman'
  }),
};


var deathVillain = new Villain({
  name: 'Death'

});

var thomasVillain = new Villain({
  name: 'Thomas'

});

var garrettBobbyFergusonVillain = new Villain({
  name: 'Garrett Bobby Ferguson'

});

var iacedromAndYbigrVillain = new Villain({
  name: 'Iacedrom And Ybigr'

});

var summertimeSongVillain = new Villain({
  name: 'Summertime Song'

});

var theMasterPrankCallerVillain = new Villain({
  name: 'The Master Prank Caller'

});

Character.prototype.attack = function(i) {
  i.health -= strength;
};



});

})();
