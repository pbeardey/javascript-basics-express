function negate(a) {
  // your code here
  return !a;
};

function both(a, b) {
  // your code here
  return a && b;
};

function either(a, b) {
  // your code here
  return a || b;
};

function none(a, b) {
  // your code here
  return !(a || b);
};

function one(a, b) {
  // your code here
  return a != b;
};

function truthiness(a) {
  // your code here
  if (a) {
    return true;
  }
  return false;
};

function isEqual(a, b) {
  // your code here
  if (a === b) {
    return (true); 
  } 
  return (false);
};

function isGreaterThan(a, b) {
  // your code here
  if (a > b) {
    return true; 
  }
  return false;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  if (a <= b) {
    return true; 
  }
  return false;
};

function isOdd(a) {
  // your code here
  if (a % 2 === 1) {
    return true; 
  }
  return false;
};

function isEven(a) {
  // your code here
  if (a % 2 === 0) {
    return true; 
  } 
  return false;
};

function isSquare(a) {
  // your code here
  if (Number.isInteger(Math.sqrt(a))) {
    return true; 
  }
  return false;
};

function startsWith(char, string) {
  // your code here
  if (string.charAt(0) === char) {
    return true; 
  }
  return false;
};

function containsVowels(string) {
  //uses RegExp.test to test string for a group of vowels with case insensitive flag.
  return /[aeiou]/i.test(string);
};

function isLowerCase(string) {
  // your code here
  if (string === string.toLowerCase()) {
    return true;
  }
  return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
