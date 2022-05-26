const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((childCount) => childCount.age < 18);

  const adult = entrants.filter((adultCount) => adultCount.age >= 18 && adultCount.age < 50);

  const senior = entrants.filter((seniorCount) => seniorCount.age >= 50);

  const obj = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };

  return obj;
}

function calculateEntry(entrants) {
  if (typeof entrants === 'undefined'
  || typeof entrants.length === 'undefined') {
    return 0;
  }

  const { prices: { adult: adultPrice,
    child: childPrice,
    senior: seniorPrice } } = data;

  const entrantsNum = countEntrants(entrants);
  const { child, adult, senior } = entrantsNum;

  return child * childPrice + adult * adultPrice + senior * seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
