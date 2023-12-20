const names = require('../constants/names')
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

exports.getName = (req, res, next) => {
  let temp = names;
  shuffle(temp);
  res.send({
    name: temp[0] + " " + temp[1]
  });
}

exports.getNames = (req, res, next) => {
  
  res.send(names);
}

exports.getNum = (req, res, next) => {
  const num = req.params.num;
  let temp = names;
  let sliced = [];
  for (let i = 0; i < num; i++) {

  shuffle(temp);
  sliced.push(temp[0] + " " + temp[1])
  }

  res.send(sliced)
}