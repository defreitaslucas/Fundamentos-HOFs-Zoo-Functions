const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const responsavel = employees.reduce((acc, elemento) => elemento.responsibleFor[0]);
  const especie = species.find((elemento) => elemento.id === responsavel);
  const animais = especie.residents.sort((a, b) => b.age - a.age);
  const primeiro = animais.find((elemento) => elemento);
  const resultado = Object.values(primeiro).map((item) => item);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
