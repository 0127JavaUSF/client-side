const abby = {
    firstName: 'Abby',
    lastName: 'Adams',
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`)
    },
    delayedSayHello: function() {
        setTimeout(() => this.sayHello(), 1000); 
    }
};

// Similar to lambda function in Java - In JS an arrow function
// const myFunction = () => abby.sayHello();
// myFunction();
abby.sayHello();

// Arrow functions don't behave exactly the same as functions declared with
// the function keyword

// Functions in JavaScript are first-class citizens or first-class objects
// const myFunction = abby.sayHello;
// myFunction();

abby.delayedSayHello();

mySetTimeout = function(f, timeout) {
    for(let i = 0; i < timeout * 100000; i++) {

    }
    console.log('My set timeout');
    f();
}
mySetTimeout(() => abby.sayHello(), 1000);