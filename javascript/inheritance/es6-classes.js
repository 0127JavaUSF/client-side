// ES6 (EcmaScript 6 - Class Syntax)
class Cat {

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    speak() {
        console.log('Meow');
    }
}

const socks = new Cat('socks', 'Maine Coone');
socks.speak();

class Tiger extends Cat {

    constructor(name) {
        super(name, 'tiger');
    }

    speak() {
        console.log('They\'re grrrrrreeeat!');
    }
}

const tony = new Tiger('Tony');
tony.speak();