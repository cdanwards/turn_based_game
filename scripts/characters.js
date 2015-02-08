
var Character = function (options) {
  options = options || {};
  _.defaults(options, {
    attackUpper: 20,
    attackLower: 5,
    health: 100
  });
  _.extend(this, options);
};

var Villain = function (options) {
  options = options || {};
  _.defaults(options, {
    attackUpper: 20,
    attackLower: 5,
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


var villains = {
  death : new Villain({
    name: 'Death',
<<<<<<< HEAD
  }),
  thomas : new Villain({
    name: 'Thomas',
  }),
  garrettBobbyFerguson: new Villain({
    name: 'Garrett Bobby Ferguson',
=======
    class: 'death'
  }),
  thomas : new Villain({
    name: 'Thomas',
    class: 'thomas'
  }),
  garrettBobbyFerguson: new Villain({
    name: 'Garrett Bobby Ferguson',
    class: 'garrett'
>>>>>>> 1f321c3f052983abb70eef4b548138eab2b410f2
  }),
  iacedromAndYbigr : new Villain({
    name: 'Iacedrom And Ybigr',
    class: 'iacedrom-and-ybgir'
  }),
  summertimeSong : new Villain({
    name: 'Summertime Song',
    class: 'summer-time'
  }),
  theMasterPrankCaller : new Villain({
    name: 'The Master Prank Caller',
<<<<<<< HEAD
=======
    class: 'tmpc'
>>>>>>> 1f321c3f052983abb70eef4b548138eab2b410f2
  })
};

// Character.prototype.attack = function(i) {
//   i.health -= strength;
// };
