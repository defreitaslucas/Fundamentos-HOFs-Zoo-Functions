const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function insertSpecies(diaSemana) {
  const especies = species.filter(({ availability }) => availability
    .includes(diaSemana)).map((specie) => specie.name);
  return especies;
}

function retornoSemParametro() {
  return Object.keys(hours).reduce((acc, elemento) => {
    let officeHour = '';
    let exhibition;
    if (hours[elemento].open === 0 && hours[elemento].close === 0) {
      officeHour = 'CLOSED';
      exhibition = 'The zoo will be closed!';
    } else {
      officeHour = `Open from ${hours[elemento].open}am until ${hours[elemento].close}pm`;
      exhibition = insertSpecies(elemento);
    }
    acc[elemento] = {
      officeHour,
      exhibition,
    };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  const verificaDiaSemana = Object.keys(hours).some((elemento) => elemento === scheduleTarget);
  const verificaAnimal = species.some((elemento) => elemento.name === scheduleTarget);

  if (verificaDiaSemana) {
    const cronogramaDia = Object.entries(retornoSemParametro()).filter((elemento) =>
      elemento[0] === scheduleTarget);
    return Object.fromEntries(cronogramaDia);
  }
  if (verificaAnimal) {
    const cronogramaAnimal = species
      .find((elemento) => elemento.name === scheduleTarget).availability;
    return cronogramaAnimal;
  }
  return retornoSemParametro();
}
console.log(getSchedule('penguins'));
module.exports = getSchedule;
