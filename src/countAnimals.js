const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allSpecies = data.species;

  if (animal === undefined) {
    return allSpecies
      .reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }

  const { specie, sex } = animal;
  const speciesNames = allSpecies.find((species) => species.name === specie).residents;
  const findSex = speciesNames.filter((animalSex) => animalSex.sex === sex);

  if (specie && sex) {
    return findSex.length;
  }

  console.log(speciesNames);

  return speciesNames.length;
}

module.exports = countAnimals;
