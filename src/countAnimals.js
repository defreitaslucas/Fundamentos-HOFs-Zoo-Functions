const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
  }

  if (Object.keys(animal).includes('sex')) {
    const especieSex = species.find((elemento) =>
      elemento.name === animal.specie).residents.filter((item) => item.sex === animal.sex);
    return especieSex.length;
  }

  const especie = species.find((elemento) => elemento.name === animal.specie);
  return especie.residents.length;
}

module.exports = countAnimals;
