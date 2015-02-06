$(document).ready(function() {

/*
    Audo for start screen
*/

var start = new Audio('sounds/yeah.mp3');

$('.start').on('click', function(){
  start.play();
  $(".start-screen-container").hide();
});






/*
  Templete function
*/
  function renderTemplate(name, data) {
    var $template = $('[data-template-name=' + name + ']').text();
    $.each(data, function(prop, value) {
      $template = $template.replace('<% ' + prop + ' %>', value);
    });
    return $template;
  }

});
