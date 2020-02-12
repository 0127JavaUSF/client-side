/* Conditional Code */

const myValue = 3;

if (myValue > 5) {
    console.log('myValue was greated than 5');
} else if(myValue == 0) {
    console.log('myValue was 0');
} else {
    // Automatic semi-colon injection
    // Semicolons are optional, and will automatically be added during
    // interpretation when not present. This does not guarantee that it will
    // understand correctly WHERE the semicolon should have been
    console.log('myValue was not greater than 5')
}

switch(myValue) {
    case 1: console.log('myValue is 1'); break;
    case 2: console.log('myValue is 2'); break;
    case 3: console.log('myValue is 3'); break;
    case 4: console.log('myValue is 4'); break;
    case 5: console.log('myValue is 5'); break;
    default: console.log('myValue is outside the range of 1-5');
}

// ternary oparation
const greater = myValue > 5 ? 'yes' : 'no';


/* Iterative Structures */

let continueLooping = true;

while(continueLooping) {
    // Generate random number in range of 0-1, compare to 0.9, continue if less than 9
    continueLooping = Math.random() < 0.9;
    console.log('Still looping!');
}

do {
    console.log('Do while continue looping!');
} while(continueLooping);

for(let x = 0; x < 10; x++) {
    console.log(x);
}

const myNums = [1, 2, 5, 10];

// for in - iterates over keys/index values
// for of - iterates over values
for(let num of myNums) {
    console.log(num);
}

// Data structures
const myMap = new Map();
const mySet = new Set();
const myArr = new Array();
