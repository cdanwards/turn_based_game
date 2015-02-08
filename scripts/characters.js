
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
    attackUpper: 40,
    attackLower: 10,
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
  })
};

var villans = {
  death : new Villain({
    name: 'Death',
  }),
  thomas : new Villain({
    name: 'Thomas',
  }),
  garrettBobbyFerguson: new Villain({
    name: 'Garrett Bobby Ferguson',
  }),
  iacedromAndYbigr : new Villain({
    name: 'Iacedrom And Ybigr'
  }),
  summertimeSong : new Villain({
   name: 'Summertime Song'
  }),
  theMasterPrankCaller : new Villain({
    name: 'The Master Prank Caller'
  })
};

Character.prototype.attack = function(i) {
  i.health -= strength;
};
