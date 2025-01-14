// Classes & Prototypes

// Classes and prototypes are fundamental concepts in JavaScript, ensuring reusability and maintainability
// of your code.
// In JavaScript, every object has a prototype (also an object) from which it inherits properties and methods.
// This is the core of JavaScript's inheritance model.

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
let person1 = new Person("Yawar Abbas", 25);
let person2 = new Person("Abbas", 30);

// Using the greet method
person1.greet(); // Output: Hello, my name is Yawar Abbas and I am 25 years old.
person2.greet(); // Output: Hello, my name is Abbas and I am 30 years old.

// In this example, we define a Person constructor function and add a greet method to its prototype. Both instances,
// person1 and person2, can use this method.

// Classes
// JavaScript classes, introduced in ECMAScript 2015 (ES6), are a syntactical sugar over the existing prototype-based 
// inheritance. They make it easier to understand and write the object-oriented code.

// Example using classes
// Let's rewrite the previous example using classes:

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hi there, this is ${this.name} and my age is ${this.age}`)
    }
};

let person1=new Person('Yawar Abbas',12);
let person2=new Person('Abbas',13);

person1.greet();
person2.greet();

// In this example, the Person class defines a constructor for initializing new objects and a greet method.
// Inheritance
// Both prototypes and classes support inheritance.

// Prototypal inheritance
// Constructor function
function Animal() {}

// Adding method to the prototype
Animal.prototype.eat = function() {
    console.log('Eating...');
};

// Constructor function
function Dog(name) {
    this.name = name;
}

// Inheriting from Animal
Dog.prototype = Object.create(Animal.prototype);

// Adding method to the prototype
Dog.prototype.bark = function() {
    console.log('Woof!');
};

// Creating an instance
const spot = new Dog('Spot');

// Using the methods from the prototype
spot.eat(); // Output: Eating...
spot.bark(); // Output: Woof!


// Class-based inheritance
// Defining a base class
class Animal {
    eat() {
        console.log('Eating...');
    }
}

// Defining a subclass
class Dog extends Animal {
    constructor(name) {
        super(); // Call the parent class constructor
        this.name = name;
    }

    bark() {
        console.log('Woof!');
    }
}

// Creating an instance
const spot = new Dog('Spot');

// Using the methods
spot.eat(); // Output: Eating...
spot.bark(); // Output: Woof!


// Prototypes in JavaScript
// Basic Definition of Prototypes
// In JavaScript, every object can have a prototype, which is another object that it inherits methods
// and properties from. This mechanism allows for the sharing of methods and properties between objects.

// Prototypal Inheritance
// Prototypal inheritance means an object inherits properties and methods from another object. 
// This is done by linking the prototype of one object to another object.

// Example of Prototypal Inheritance
// javascript
// Define a constructor function
function Vehicle(type) {
    this.type = type;
}

// Add a method to the Vehicle prototype
Vehicle.prototype.describe = function() {
    return `This is a ${this.type}.`;
};

// Define another constructor function
function Car(type, brand) {
    Vehicle.call(this, type);
    this.brand = brand;
}

// Set the prototype of Car to an instance of Vehicle
Car.prototype = Object.create(Vehicle.prototype);

// Restore the constructor property
Car.prototype.constructor = Car;

// Add a method to the Car prototype
Car.prototype.getBrand = function() {
    return `This car is a ${this.brand}.`;
};

// Create an instance of Car
const myCar = new Car('sedan', 'Toyota');

// Use the methods from Car and Vehicle prototypes
console.log(myCar.describe()); // Output: This is a sedan.
console.log(myCar.getBrand()); // Output: This car is a Toyota.


Classes in JavaScript
Basic Definition of Classes
Classes in JavaScript are a more convenient and cleaner syntax for creating objects and handling 
inheritance, introduced in ECMAScript 2015 (ES6). They are essentially syntactical sugar over 
JavaScript's existing prototype-based inheritance.

Class-based Inheritance
Class-based inheritance involves defining a class (parent/superclass) which other classes (subclasses)
can inherit from. The subclasses can then use and extend the properties and methods of the parent class.

Example of Class-based Inheritance
javascript
// Define a base class
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    describe() {
        return `This is a ${this.type}.`;
    }
}

// Define a subclass
class Car extends Vehicle {
    constructor(type, brand) {
        super(type); // Call the parent class constructor
        this.brand = brand;
    }

    getBrand() {
        return `This car is a ${this.brand}.`;
    }
}

// Create an instance of Car
const myCar = new Car('sedan', 'Toyota');

// Use the methods from Car and Vehicle class
console.log(myCar.describe()); // Output: This is a sedan.
console.log(myCar.getBrand()); // Output: This car is a Toyota.


// Comparison of Prototypal Inheritance and Class-based Inheritance

// Characteristic	              Prototypal Inheritance	                            Class-based Inheritance
// 1. Syntax	              More verbose and requires more manual setup	               Cleaner and more readable
// 2. Inheritance Model	  Relies on linking prototypes explicitly	                   Uses extends keyword, making it straightforward
// 3. Method Addition        Added directly to the prototype	                           Defined inside the class
// 4. Constructor            Functions serve as constructors	                           constructor method inside the class
    
// Key Takeaways
// Prototypes: Good when you need direct control over inheritance and prototypal links.

// Classes: Useful for cleaner, more readable code that is easy to maintain, especially for those familiar with traditional OOP.
