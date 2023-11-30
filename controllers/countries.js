const countries = require('../constants/countries')
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
function randomInt(min, max) {
  // Ensure that the input values are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random integer within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getCountry = (req, res, next) => {
  
  res.send(countries[randomInt(0, countries.length)]);
}

exports.getAll = (req, res, next) => {
  res.send(countries)
}

exports.getNum = (req, res, next) => {
  const num = req.params.num;
  let countryList = countries;
  shuffle(countryList);
  const sliced = countryList.slice(0, num);

  res.send(sliced)
}