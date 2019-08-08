// Let's get some practice writing a few objects for a new group of interns at a small business.
console.log(`\nObjects:`);

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
};

// Write your intern objects here:
// 1,mmelloy0@psu.edu,Mitzi,F
const mmelloy = {
  "id": 1,
  "name": "Mitzi",
  "email": "mmelloy0@psu.edu",
  "gender": "F"
};
// 2,kdiben1@tinypic.com,Kennan,M
const kdiben = {
  "id": 2,
  "name": "Kennan",
  "email": "kdiben1@tinypic.com",
  "gender": "M"
};
// 3,kmummery2@wikimedia.org,Keven,M
const kmummery = {
  "id": 3,
  "name": "Keven",
  "email": "kmummery2@wikimedia.org",
  "gender": "M"
};
// 4,gmartinson3@illinois.edu,Gannie,M
const gmartinson = {
  "id": 4,
  "name": "Gannie",
  "email": "gmartinson3@illinois.edu",
  "gender": "M"
};
// 5,adaine5@samsung.com,Antonietta,F
const adaine = {
  "id": 5,
  "name": "Antonietta",
  "email": "adaine5@samsung.com",
  "gender": "F"
};

const interns = { mmelloy,kdiben,kmummery,gmartinson,adaine };

console.log(`Interns:`);
console.log(interns);

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

console.log(`\nMitzi's name:`);
console.log(interns.mmelloy.name);

console.log(`\nKennan's ID:`);
console.log(interns.kdiben.id);

console.log(`\nKeven's email:`);
console.log(interns.kmummery.email);

console.log(`\nGannie's name:`);
console.log(interns.gmartinson.name);

console.log(`\nAntonietta's Gender:`);
console.log(interns.adaine.gender);

// ==== Challenge 3: Object Methods ==== 
console.log(`\nGive Kennan the ability to say "Hello, my name is Kennan!"`);  // Use the console.log provided as a hint.
interns.kdiben.speak = function () { return `Hello, my name is ` + interns.kdiben.name + `!`; };
console.log(interns.kdiben.speak());

console.log(`\nAntonietta loves math, give her the ability to multiply two numbers together and return the product.`);  // Use the console.log provided as a hint.
// interns.adaine.multiplyNums = function (num1, num2) { return num1 * num2; };
interns.adaine.multiplyNums = (num1, num2) => num1 * num2;
console.log(interns.adaine.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge
// ==== Stretch Challenge: Nested Objects and the this keyword ==== 
// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.
console.log(`\nStretch:`);

class Person {
  constructor(name, age) {
    let person = {};
    this.name = name;
    this.age = age;

    this.speak = function() { console.log(`My name is ` + this.name); };

    this.parent = Person;
    this.child = Person;
  }
}

const parent = new Person("Susan", 70);
const child = new Person("George", 50);
const grandchild = new Person("Sam", 30);

//doubly-linked list functionality for the heck of it
parent.child = child;
parent.grandchild = grandchild;

child.parent = parent;
child.child = grandchild;

grandchild.parent = child;

console.log(`\nLog the parent object's name`);
console.log(`Parent name: `+parent.name);

console.log(`\nLog the child's age`);
console.log(`Child age: `+child.age);

console.log(`\nLog the name and age of the grandchild`);
console.log(`Grandchild name: `+grandchild.name+` age: `+grandchild.age);

console.log(`\nHave the parent speak`);
parent.speak();

console.log(`\nHave the child speak`);
child.speak();
console.log(`\nHave the child speak (called as a linked list)`);
parent.child.speak();

console.log(`\nHave the grandchild speak`);
grandchild.speak();
console.log(`\nHave the grandchild speak (called as a linked list)`);
parent.child.child.speak();