/** 
    Two ways to check equality in JS.
    Double equal sign (==), the second is the triple equals sign (===)

    Double equal sign compares values using type coersion where necessary.
    Triple equal compares values without type coersion.

    What is type coersion?
    Type coersion is the implicit conversion of one type to another for an equality
    check. A simple example of this would be converting a string to a number
    in order to check equality.
*/
const myFun = function(val) {
    val = +val;
}

console.log(1 == 1); // true
console.log(1 == '1'); // true, because 1 can be coersed to a string '1' and compared
console.log(1 === '1'); // false, no type coersion and they're disparate types

console.log(1 + +'1'); // '11' - with parseInt() -> 2
console.log(1 - '1'); // 0
console.log('1' == '3' - '2'); // true