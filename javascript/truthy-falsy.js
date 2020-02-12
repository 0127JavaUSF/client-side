/*
    * Truthy-Falsy
    * 1. Any value of any type can be evaluated as a predicate. Either true or false.
    * 2. When used with logical operators, the result of the evaluation is the value
    *   that had evaluated last with consideration to short circuit logical operation.
*/

const falsyValues = ['', null, false, 0, NaN, undefined, 0n];

const x = 0n;
if (x) {
    console.log('Hello from if');
} else {
    console.log('Hello from else');
}

const myVar = 'cat';

const myResult = undefined || 'dog';

console.log(myResult);

const maybeUndefined = Math.random() > 0.5 ? undefined : 'Abby';

const result = maybeUndefined || 'Billy';

console.log(result);