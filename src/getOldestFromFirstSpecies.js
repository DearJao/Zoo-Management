const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((findPersons) => findPersons.id === id);
  const responsableSpecie = person.responsibleFor[0];

  const firstANimal = data.species.find((aaa) => aaa.id === responsableSpecie).residents;

  firstANimal.sort((a, b) => b.age - a.age);

  return Object.values(firstANimal[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
