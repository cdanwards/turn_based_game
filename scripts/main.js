$(document).ready(function() {



// Sounds
var start = new Audio('sounds/yeah.mp3');
var mordecai = new Audio('sounds/mordecai.mp3');
var rigby = new Audio('sounds/rigby.mp3');
var benson = new Audio('sounds/benson.mp3');
var pops = new Audio('sounds/pops.mp3');
var skips = new Audio('sounds/skips.mp3');
var muscleman = new Audio('sounds/muscleman.mp3');



// Character select
var $characterOutput = $('.character-screen');

//Template
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
//   // alert('clicked');
//   $('.selected-character').addClass('mordecai-background');
// });
//
// $characterOutput.on('click', '.rigby', function() {
//   // alert('clicked');
//   $('.selected-character').addClass('rigby-background');
// });
//
// $characterOutput.on('click', '.benson', function() {
//   // alert('clicked');
//   $('.selected-character').addClass('benson-background');
// });
//
// $characterOutput.on('click', '.pops', function() {
//   // alert('clicked');
//   $('.selected-character').addClass('pops-background');
// });
//
//
// $characterOutput.on('click', '.skips', function() {
//   // alert('clicked');
//   $('.selected-character').addClass('skips-background');
// });
//
// $characterOutput.on('click', '.muscleman', function() {
//   // alert('clicked');
//   $('.selected-character').addClass('muscleman-background');
// });
var characterNames = ["mordecai", "rigby", "benson", "pops", "skips", "muscleman"];
// var lastClass = $('#container').attr('class').split(' ').pop();

characterNames.forEach(function(char) {
    $characterOutput.on('click', '.'+char, function(e) {
        // alert('click on ' + char + '!');
        $('#selected-character').removeClass().addClass(char + '-background');

        eval(char).play();

    });
});


});
