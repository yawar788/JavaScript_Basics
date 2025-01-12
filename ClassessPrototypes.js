// Classes & Prototypes

// Classes and prototypes are fundamental concepts in JavaScript, ensuring reusability and maintainability
// of your code.

// Prototypes in JavaScript
// JavaScript is prototype-based, meaning that object properties and methods can be shared through prototypes.

// Prototype Example:
// Here’s an example using prototypes to add methods to a constructor function:
// javascript
// Constructor function for Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the Person's prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances of Person
let person1 = new Person("Yawar", 25);
let person2 = new Person("Abbas", 30);

// Using the greet method
person1.greet(); // Output: Hello, my name is Yawar and I am 25 years old.
person2.greet(); // Output: Hello, my name is Abbas and I am 30 years old.

// In this example, we define a Person constructor function and add a greet method to its prototype. Both instances,
// person1 and person2, can use this method.
