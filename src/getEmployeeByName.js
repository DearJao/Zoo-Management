const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const getEmployeesObj = data.employees;

  const getEmployeeFirstName = getEmployeesObj.find(
    (first) => first.firstName === employeeName,
  );

  const getEmployeeLastName = getEmployeesObj.find(
    (last) => last.lastName === employeeName,
  );
  if (getEmployeeFirstName !== undefined) {
    return getEmployeeFirstName;
  }
  return getEmployeeLastName;
}

console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
