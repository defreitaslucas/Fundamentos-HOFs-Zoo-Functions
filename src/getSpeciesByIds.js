const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // chamei a função map nos ids para que crie um array contendo os todos os ids passados e fiz um find em species para preencher o array map com os elementos comparando id ao parametro item
  return ids.map((item) => species.find((elemento) => elemento.id === item));
}

module.exports = getSpeciesByIds;
