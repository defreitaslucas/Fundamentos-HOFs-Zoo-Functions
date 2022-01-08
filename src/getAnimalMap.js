const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function categorizaLocation() {
  const animal = species.reduce((acc, elemento) => {
    if (elemento.location === 'NE') {
      acc.NE.push(elemento.name);
    } else if (elemento.location === 'NW') {
      acc.NW.push(elemento.name);
    } else if (elemento.location === 'SE') {
      acc.SE.push(elemento.name);
    } else {
      acc.SW.push(elemento.name);
    }
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
  return animal;
}

function includeTrue(array, options) {
  return array.reduce((acc, elemento) => {
    let nomeAnimais;
    if (options.sex) {
      nomeAnimais = elemento.residents.filter((item) => item.sex === options.sex)
        .map((item) => item.name);
    } else {
      nomeAnimais = elemento.residents.map((item) => item.name);
    }
    if (options.sorted) {
      nomeAnimais = nomeAnimais.sort();
    }
    acc.push({ [elemento.name]: nomeAnimais });
    return acc;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  if (!options.includeNames) {
    const location = categorizaLocation();
    return location;
  }
  const specieNe = species.filter((elemento) => elemento.location === 'NE');
  const specieNw = species.filter((elemento) => elemento.location === 'NW');
  const specieSe = species.filter((elemento) => elemento.location === 'SE');
  const specieSw = species.filter((elemento) => elemento.location === 'SW');
  const resultado = {
    NE: includeTrue(specieNe, options),
    NW: includeTrue(specieNw, options),
    SE: includeTrue(specieSe, options),
    SW: includeTrue(specieSw, options),
  };
  return resultado;
}
console.log(JSON.stringify(getAnimalMap({ includeNames: true, sex: 'female' })));

module.exports = getAnimalMap;
