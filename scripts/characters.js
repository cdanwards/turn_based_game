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


var characters = {
  mordecaiCharacter : new Character({
    name: 'Mordecai'
  }),
  rigbyCharacter : new Character({
    name: 'Rigby'
  }),
  bensonCharacter : new Character({
    name: 'Benson'
  }),
  popsCharacter : new Character({
    name: 'Rigby'
  }),
  skipsCharacter : new Character({
    name: 'Skips'
  }),
  musclemanCharacter : new Character({
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

})();
