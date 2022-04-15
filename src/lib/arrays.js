const getNthElement = (index, array) => {
  // your code here
  return array[index%array.length];
};

const arrayToCSVString = array => {
  // your code here
  return array.join();
};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  const addToArray = array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index,1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map( number => number.toString() );
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map ( string => string.toUpperCase() );
  
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map ( string => string.split('').reverse().join('') );
}

const onlyEven = numbers => {
  // your code here
  return numbers.filter( (number) => {if (number%2===0) {return this}} );
};

const removeNthElement2 = (index, array) => {
  // your code here
  return array.filter( (element, ix)=> { 
    if (ix!=index){
      return element;
    }
} )
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter( string => /^[aeiou]/i.test(string));
  
};

const removeSpaces = string => {
  // your code here
  return (string.split(' ')).join('');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((prevTotal, currentNumber)=>{ return prevTotal + currentNumber},0 );
};

const sortByLastLetter = strings => {
  // your code here
  return reverseWordsInArray((reverseWordsInArray(strings)).sort());
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
