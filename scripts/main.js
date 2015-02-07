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

// $characterOutput.on('click', '.mordecai', function() {
//   alert('clicked');
//   $('.selected-character').addClass('mordecai-background');
// });
//
// $characterOutput.on('click', '.rigby', function() {
//   alert('clicked');
//   $('.selected-character').addClass('rigby-background');
// });
//
// $characterOutput.on('click', '.benson', function() {
//   alert('clicked');
//   $('.selected-character').addClass('benson-background');
// });
//
// $characterOutput.on('click', '.benson', function() {
//   alert('clicked');
//   $('.selected-character').addClass('benson-background');
// });
//
// $characterOutput.on('click', '.pops', function() {
//   alert('clicked');
//   $('.selected-character').addClass('pops-background');
// });
//
//
// $characterOutput.on('click', '.skips', function() {
//   alert('clicked');
//   $('.selected-character').addClass('skips-background');
// });

var characterNames = ['mordecai', 'rigby', 'benson', 'pops', 'skips', 'muscleman'];
characterNames.forEach(function(char) {
    $characterOutput.on('click', '.'+char, function() {
        // alert('click on ' + char + '!');
        $('.selected-character').addClass(char + '-background');
    });
});

});
