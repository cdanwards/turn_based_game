(function(){
  'use strict';

var Character = function (options) {
  options = options || {};
  _.defaults(options, {
    health: 100,
    strength: 10,
  });
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

Character.prototype.attack = function(i) {
  i.health -= strength;
};

})();
