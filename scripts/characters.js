(function(){
  'use strict';

var Character = function (options) {
  options = options || {};
  _.defaults(options, {
    attack: _.random(10, 40)
    health: 100;
  });
  _.extend(this, options);
};

var Villain = function (options) {
  options = options || {};
  _.defaults(options, {
    attack: _.random(10, 45)
    health: 100;
  });
  _.extend(this, options);
};

var mordecaiCharacter = new Character({

});

var rigbyCharacter = new Character({

});

var bensonCharacter = new Character({

});

var popsCharacter = new Character({

});

var skipsCharacter = new Character({

});

var muscleManCharacter = new Character({

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
