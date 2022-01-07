const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const objeto = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  return entrants.reduce((acc, item) => {
    if (item.age < 18) {
      acc.child += 1;
    } else if (item.age >= 18 && item.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, objeto);
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const retornoCount = countEntrants(entrants);
  const variavel = (retornoCount.child * prices.child)
  + (retornoCount.adult * prices.adult) + (retornoCount.senior * prices.senior);
  return variavel;
}

module.exports = { calculateEntry, countEntrants };
