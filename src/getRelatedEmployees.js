const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return employees.some((elemento) => elemento.managers.find((item) =>
    item === id) === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const gerente = isManager(managerId);
  if (gerente) {
    return employees.filter((elemento) =>
      elemento.managers.find((item) =>
        item === managerId) === managerId)
      .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
