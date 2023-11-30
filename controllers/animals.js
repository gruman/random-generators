const animals = require('../constants/animals')
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

exports.getAnimal = (req, res, next) => {
  
  res.send(animals[randomInt(0, animals.length)]);
}

exports.getAll = (req, res, next) => {
  res.send(animals)
}

exports.getNum = (req, res, next) => {
  const num = req.params.num;
  let animalList = animals;
  shuffle(animalList);
  const sliced = animalList.slice(0, num);

  res.send(sliced)
}