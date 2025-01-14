// Functions are a fundamental building block in JavaScript. They allow you to encapsulate 
// reusable code blocks, making your programs modular, readable, and maintainable. Let’s 
// start with the basics and gradually move to advanced topics with examples.

// 1. What is a Function?
// A function is a block of code designed to perform a specific task. 
// It executes when called or invoked.

// Basic Syntax
// function functionName(parameters) {
//     // Function body: the code to execute
//     return value; // Optional: returns a value to the caller
// }


// 2. Declaring and Invoking a Function
// Example 1: Simple Function
// function greet() {
//     console.log("Hello, World!");
// }

// // Calling the function
// greet(); // Output: Hello, World!


// Example 2: Function with Parameters
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet("Yawar"); // Output: Hello, Yawar!


// Example 3: Function with Return Value
// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 3); 
// console.log(result); // Output: 8


// 3. Types of Functions
// A. Function Declaration
// function square(num) {
//     return num * num;
// }
// console.log(square(4)); // Output: 16


// B. Function Expression
// Functions can be assigned to variables.
// const multiply = function(a, b) {
//     return a * b;
// };
// console.log(multiply(4, 5)); // Output: 20


// C. Arrow Functions (ES6)
// A concise way to write functions.
// const subtract = (a, b) => a - b; // Implicit return
// console.log(subtract(10, 4)); // Output: 6


// D. Anonymous Functions
// Functions without a name, often used as callbacks.
// setTimeout(function() {
//     console.log("This is delayed.");
// }, 1000);


// E. Immediately Invoked Function Expressions (IIFE)
// Executed as soon as defined.
// (function() {
//     console.log("IIFE Executed!");
// })();


// 4. Parameters and Arguments
// Default Parameters (ES6)
// You can provide default values for parameters.
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }

// greet(); // Output: Hello, Guest!
// Rest Parameters (ES6)
// Combine multiple arguments into a single array.

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10


// 5. Advanced Concepts
// A. Closures
// A closure is a function that remembers the variables from its scope even after
// the outer function has finished execution.

// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         return count;
//     };
// }

// const counter = outer();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2


// B. Higher-Order Functions
// Functions that take other functions as arguments or return them.
  
// function operate(a, b, callback) {
//     return callback(a, b);
// }

// function multiply(a, b) {
//     return a * b;
// }

// console.log(operate(5, 4, multiply)); // Output: 20


// C. Recursion
// A function calling itself to solve a problem.
// function factorial(n) {
//     if (n === 0) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // Output: 120


// D. Function Currying
// Transforming a function with multiple arguments into a sequence of nested functions.
// function multiply(a) {
//     return function(b) {
//         return a * b;
//     };
// }

// const multiplyByTwo = multiply(2);
// console.log(multiplyByTwo(5)); // Output: 10


// 6. Function Context (this)
// The value of this depends on how the function is called.

// Example: Global Context
// function showThis() {
//     console.log(this);
// }
// showThis(); // Output: Window (or global object in Node.js)

// Example: Object Method
// const obj = {
//     name: "Yawar",
//     greet() {
//         console.log(`Hello, ${this.name}!`);
//     }
// };
// obj.greet(); // Output: Hello, Yawar!
// Arrow Functions and this
// Arrow functions do not have their own this context; they inherit it from their surrounding scope.

// const obj = {
//     name: "Yawar",
//     greet: () => {
//         console.log(`Hello, ${this.name}`);
//     }
// };
// obj.greet(); // Output: Hello, undefined


// 7. Function Best Practices
// Use descriptive names for functions.
// Keep functions short and focused on a single task.
// Avoid using too many global variables; prefer local variables.
// Use arrow functions for concise syntax when possible.
