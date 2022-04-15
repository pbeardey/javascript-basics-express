const createPerson = (name, age) => {
  // your code here
  const person = {
    name: name,
    age: age
  };
  return person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  if (object[property]){
    return true;
  }
  return false;
  
};

const isOver65 = person => {
  // your code here
  if (person.age>65) {
    return true;
  }
  return false;
};

const getAges = people => {
  // your code here
  return people.map((people)=>{return people.age});
};

const findByName = (name, people) => {
  // your code here

  return people.find( (person) => person.name === name );

};

const findHondas = cars => {
  // your code here
  return cars.filter(car => car.manufacturer === 'Honda')
};

const averageAge = people => {
  // your code here
  return people.reduce( (acc, currPerson) => {return acc + currPerson.age;}, 0 )/people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const talkingPerson = {
    name: name,
    age: age,
    introduce: function(friendName){
      return `Hi ${friendName}, my name is ${this.name} and I am ${this.age}!`
    }
  }
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
