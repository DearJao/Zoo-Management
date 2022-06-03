const data = require('../data/zoo_data');

const allSpecies = (animalsId) => animalsId.map((element) =>
  data.species.find((animalData) => animalData.id === element).name);

const locations = (specie) => specie.map((element) =>
  data.species.find((cordenates) => cordenates.name === element).location);

const finalObj = (employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: allSpecies(responsibleFor),
    locations: locations(allSpecies(responsibleFor)),
  };
};

const allEmployees = () => data.employees.map((obj) => finalObj(obj));

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return allEmployees();
  }

  const { name, id } = param;
  const employeesObj = data.employees;

  const employee = () => employeesObj.find((names) => names.firstName === name
  || names.lastName === name || names.id === id);

  if (employee() === undefined) {
    throw new Error('Informações inválidas');
  }
  return finalObj(employee());
}

module.exports = getEmployeesCoverage;
