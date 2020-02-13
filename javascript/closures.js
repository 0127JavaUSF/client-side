
// A closure is a programming feature that allows variables in an outer scope
// to stay alive, even after their block has completed, under the circumstance
// that an inner scope is still accessible and holds references to the outer scope's
// variables.

const outerFunction = function() {
    // object scoped
    // Normally, when a block scoped variable's block ends
    // it is no longer available, cannot be used, and may be garbage collected
    let cat = {
        name: 'Socks',
        age: 2
    };

    // Returns a function which prints x
    return {
        getName: () => cat.name,
        getAge: () => cat.age,
        setName: (name) => cat.name = name
    };
}

const cat = outerFunction();
console.log(cat.getName()); // socks
console.log(cat.getAge()); // 2
cat.setName('Sprinkles'); // mutate name 
console.log(cat.getName()); // Sprinkles
