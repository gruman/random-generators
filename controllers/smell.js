const nouns = require('../constants/nouns')
const between = require('../constants/between')

function randomInt(min, max) {
  // Ensure that the input values are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random integer within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getSmell = (req, res, next) => {
  
  const smell = {
    message: "You smell like " + nouns[randomInt(0, nouns.length)] + " " + between[randomInt(0, between.length)].toLowerCase() + " " + nouns[randomInt(0, nouns.length)] + "." 
  }
  res.send(smell);
}