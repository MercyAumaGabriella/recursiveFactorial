function recursiveFactorial(number, res) {
  if (number === 0 || number === 1) {
    return res;
  } else if (number < 0) {
    return undefined;
  }
  return recursiveFactorial(number - 1, number * res);
}

module.exports = recursiveFactorial;
