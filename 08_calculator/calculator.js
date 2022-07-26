const add = function (num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

const subtract = function (num1, num2) {
  return parseInt(num1) - parseInt(num2);
};

const sum = function (array) {
  let runningSum = 0;
  array.forEach(elem => {
    runningSum += parseInt(elem);
  }
  )
  return runningSum;
};

const multiply = function (array) {
  let runningResult = 1;
  array.forEach(elem => {
    runningResult *= parseInt(elem);
  }
  )
  return runningResult;
};

const power = function (num1, num2) {
  return Math.pow(parseInt(num1), parseInt(num2));
};

const factorial = function (number) {
  number = parseInt(number);
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
