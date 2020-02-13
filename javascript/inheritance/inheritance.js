const spot = {
    name: 'Spot',
    breed: 'Dalmation',
    weightLbs: 25,
    hasFur: true
};

console.log(spot.name); // Spot

// No classes - JavaScript focuses on objects
// Java features classical inheritance - classical revolving around classes
// JavaScript features prototypal inheritance - objects inherit from objects

// Original method for this in JavaScript
const clifford = Object.create(spot);

console.log(clifford.name); // Spot
clifford.name = 'Clifford';
console.log(clifford.name); // Clifford
console.log(clifford.breed); // Dalmation


// __proto__ is a field an object that defines its parent
// the parent reference is a LIVE object, which can be mutated or even
// replaced entirely.

// When a property is accessed on an object, it first tries to find the
// property defined directly on the object, then if it is not present,
// will recursively search through the __proto__ objects. This is called
// the proto chain.