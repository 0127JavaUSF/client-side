/* Variable Declaration - We have no type declarations, but there are 
variable declarations.  In the old days of JavaScript, there was one
declaration keyword:  var.  When ES6 (EcmaScript 6) was released two
new declarations were introduced: let and const. General recommendation:
stick with let and const, and don't use var. */

someDeclaration = 1; // Very bad practice, don't do it
var varVariable; // Not recommended, avoid
let letVariable;
const constVariable = 1; // const - constant, cannot be reassigned

/* JavaScript Types */
console.log(typeof 1); // number (Java double)
console.log(typeof 'hello'); // string
console.log(typeof true); // boolean

// {key: value} <-- object literals
console.log(typeof {}) // object 

console.log(typeof []); // object
console.log(typeof letVariable); // undefined
console.log(typeof null); // object
console.log(typeof console.log); // function?
console.log(typeof NaN); // number
console.log(typeof Symbol('hello')); // Symbol


