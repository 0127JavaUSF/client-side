// var - Does weird scoping things
// * Have two possible scopes:
// * 1. global
// * 2. function

//* let & const have the same scoping rules
//* 1. block scope - scoped to their most immediate block

// myVar will be in global scope
var myVar = 20;

const myFunction = function() {

    console.log(myOtherVar);

    // var declarations are HOISTED - hoisting is the behavior of the declaration
    // of a variable to the TOP of its scope
    var myOtherVar = 30;
    // Should be in scope here?
    console.log(myOtherVar);
}

const callMyFunction = function() {
    myFunction();
    // Should be in scope - it was declared globally
    console.log(myVar);

    // Should not be in scope - it was declared scoped to myFunction
    // console.log(myOtherVar);

    if (true) {
        // Though it's in a block, it is scoped to the function
        // because it is a var declaration
        var innerVar = 'hello';
    }

    if (true) {
        // Though it's in a block, it is scoped to the function
        // because it is a var declaration
        let innerLet = 'let hello';
    }

    console.log(innerVar);
    console.log(innerLet); // ReferenceError
}

const value = callMyFunction();
console.log(value);