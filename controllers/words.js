const words = require('../constants/scrabble')
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

exports.getWord = (req, res, next) => {
  let temp = words;
  shuffle(temp);
  res.send(temp[0]);
}

exports.getNum = (req, res, next) => {
  const num = req.params.num;
  let temp = words;
  let sliced = [];
  for (let i = 0; i < num; i++) {

  shuffle(temp);
  sliced.push(temp[0])
  }

  res.send(sliced)
}