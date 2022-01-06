const { species } = require('../data/zoo_data');

const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.filter((elemento) => elemento.name === animal)
    .reduce((acc, elemento) => elemento.residents.every((item) => item.age >= age), 0);
}

module.exports = getAnimalsOlderThan;
