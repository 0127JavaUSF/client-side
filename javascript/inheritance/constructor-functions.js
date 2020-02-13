/** 
 * Constructor functions came later in JavaScript's development.
 * They were implemented alongside the 'new' keyword, and allow for functions
 * to instantiate objects.
 * 
 * The syntax for this at basic level is often easy to follow, but when optimized
 * can be extremely unintuitive. 
 */

const Cat = function(name, breed) {
    this.name = name;
    this.breed = breed;

    this.speak = function() {
        console.log('Meow');
    }
}

const socks = new Cat('Socks', 'Maine Coone');

socks.speak();