(function(){
  'use strict';

var Character = function (options) {
  options = options || {};
  _.defaults(options, {
    attack: _.random(10, 40),
    health: 100;
  });
  _.extend(this, options);
};

var Villain = function (options) {
  options = options || {};
  _.defaults(options, {
    attack: _.random(10, 45),
    health: 100;
  });
  _.extend(this, options);
};

var mordecaiCharacter = new Character({
  name: 'Mordecai'
});

var rigbyCharacter = new Character({
  name: 'Rigby'
});

var bensonCharacter = new Character({
  name: 'Benson'
});

var popsCharacter = new Character({
  name: 'Pops'
});

var skipsCharacter = new Character({
  name: 'Skips'
});

var muscleManCharacter = new Character({
  name: 'Musicle Man'
});

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

})();
