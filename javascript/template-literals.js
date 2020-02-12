const myString = 'hello';
const myOtherString = "hello again";

const firstName = 'Abby';
const lastName = 'Adams';

console.log(myString + ' ' + firstName);
console.log(myOtherString + ' ' + firstName + ' ' + lastName);
// Template Literals are an ES6 feature that allow simpler string interpolation
// Template literals use tick marks (`, above tab, same key as tilda ~)
// Template literals can include line breaks - normal string literals can't
console.log(`${myOtherString} ${firstName} ${lastName}`);
console.log(`Hello everyone, my name is ${firstName}.`);

// console.log('line 1 
// line 2'); // syntax error

console.log(`line 1 \
line 2`);

// aside
const y = predicate ? true-result : false-result;
const x = 5 > (10 < 6 ? 3 : 9) ? 7 == 9 ? (2 > 3 ? 4: 1) : 1 > 1 ? 7 : 10 : 6;
console.log(x);