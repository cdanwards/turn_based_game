
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
    health: 200
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
    image: deathImage
  }),
  garrettBobbyFerguson: new Villain({
    name: 'Garrett Bobby Ferguson',
    image: deathImage
  }),
  iacedromAndYbigr : new Villain({
    name: 'Iacedrom And Ybigr',
    image: deathImage
  }),
  summertimeSong : new Villain({
   name: 'Summertime Song',
   image: deathImage
  }),
  theMasterPrankCaller : new Villain({
    name: 'The Master Prank Caller',
    image: deathImage
  })
};

// Character.prototype.attack = function(i) {
//   i.health -= strength;
// };
