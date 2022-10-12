const reverseString = function (string) {
  let newString = "";
  if (string) {
    for (let i = string.length - 1; i >= 0; i--) {
      newString += string[i];
    }
    return newString;
  } else {
    return "";
  }
};

// Do not edit below this line
module.exports = reverseString;
