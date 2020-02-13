function myFunction(callback) {
    callback();
}

myFunction(() => console.log('Say hello'));

// What is the order of events taking place in this file?
// 1. myFunction is defined  // Line 1
// 2. myFunction gets called with a function parameter // Line 5
// 3. myFunction's parameter callback is called // Line 2
// 4. 'Say hello' is printed to the console // Line 2

function deepCallback(callback) {
    return callback(); // A function being returned from a function
}

function topCallback(callback) {
    deepCallback(callback)();
}

topCallback(() => () => console.log('Hello'));

// 1. deepCallback is defined - L13
// 2. topCallback is defined - L17
// 3. topCallback is called with a function parameter - L21
// 4. deepCallback is called with a function parameter - L18
// 5. callback is called and returns a function - L14
// 6. console.log is called - L18

// Callback hell

// First class citizen / First class objects - 