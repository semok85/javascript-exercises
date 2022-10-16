const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (sum) {
  if (sum.length < 1) {
    return 0;
  } else {
    return sum.reduce((num1, num2) => {
      return num1 + num2;
    });
  }
};

const multiply = function (num) {
  if (num.length < 1) {
    return 0;
  } else {
    return num.reduce((num1, num2) => {
      return num1 * num2;
    });
  }
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let fac = 1;
  for (let i = num; i > 0; i--) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
