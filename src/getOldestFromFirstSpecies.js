const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const responsavel = employees.filter((elemento) => elemento.id === id);
  const responsavelAnimal = responsavel.map((elemento) => elemento.responsibleFor[0]);
  const especie = species.find((elemento) => elemento.id === responsavelAnimal[0]);
  const animais = especie.residents.sort((a, b) => b.age - a.age);
  const primeiro = animais.find((elemento) => elemento);
  const resultado = Object.values(primeiro).map((item) => item);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
