
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
    name: 'Pops'
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
