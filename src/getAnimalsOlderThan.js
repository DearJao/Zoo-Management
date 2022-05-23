const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getSpecies = data.species;

  const getSpecieName = getSpecies.find((obj) => obj.name === animal);

  return getSpecieName.residents.every((animalsAge) => animalsAge.age >= age);
}

module.exports = getAnimalsOlderThan;
