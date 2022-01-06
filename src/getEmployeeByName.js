const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const funcionario = employees.find((elemento) =>
    elemento.firstName === employeeName || elemento.lastName === employeeName);
  if (!funcionario) {
    return {};
  }
  return funcionario;
}

module.exports = getEmployeeByName;
