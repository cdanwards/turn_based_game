(function(){
  'use strict';

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

});

var thomasVillain = new Villain({

});

var garrettBobbyFergusonVillain = new Villain({

});

var iacedromAndYbigrVillain = new Villain({

});

var summertimeSongVillain = new Villain({

});

var deathVillain = new Villain({

});

Character.prototype.attack = function(i) {
  i.health -= strength;
};

})();
