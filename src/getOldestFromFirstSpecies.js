const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const responsavel = employees.filter((elemento) => elemento.id === id);
  const idAnimal = responsavel[0].responsibleFor[0];
  const especie = species.find((elemento) => elemento.id === idAnimal);
  const animais = especie.residents.sort((a, b) => b.age - a.age);
  const primeiro = animais[0];
  const resultado = Object.values(primeiro).map((item) => item);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
