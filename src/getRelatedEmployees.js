const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((mana) => mana.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const areManagerOf = data.employees.filter((finder) => finder
    .managers.includes(managerId));

  const employeesNames = areManagerOf
    .reduce((acc, curr) => acc.concat(`${curr.firstName} ${curr.lastName}`), []);

  return employeesNames;
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
