
// Advanced Functions 
Basic Functions\
A basic function in JavaScript is a reusable block of code designed to perform a specific task.

// 1. Closures
// A closure is a function that retains access to its lexical scope, even when executed 
// outside of its original scope.

// Example:
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     };
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');


// 2. Higher-Order Functions
// Functions that can take other functions as arguments or return functions are called 
// higher-order functions.

// Example: Using Functions as Arguments
// javascript
function greetUser(callback, name) {
  callback(name);
}

function sayHello(name) {
  console.log("Hello, " + name + "!");
}

greetUser(sayHello, "Bob"); // "Hello, Bob!"

// Example:
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// Explanation:
// multiplyBy returns a function, making it a higher-order function. This enables 
// dynamic behavior customization.

// 4. Function Composition
// Function composition combines two or more functions to create a new function.

// Example:
// const add = (x) => x + 2;
// const multiply = (x) => x * 3;

// const compose = (f, g) => (x) => f(g(x));

// const addThenMultiply = compose(multiply, add);

// console.log(addThenMultiply(2)); // Output: 12
// Explanation:
// Functions are composed by applying one function to the result of another.


// 5. IIFE (Immediately Invoked Function Expressions)
// An IIFE is a function that runs immediately after it is defined.
// It's a JavaScript function 
// that runs as soon as it is defined. This is often used to create a local scope for variables,
// to avoid polluting the global scope.


javascript
(function() {
  // Function logic here
})();

or

(function() {
  // Function logic here
}());
Here's a simple example:
javascript
(function() {
  var message = "Hello, I am an IIFE!";
  console.log(message);
})();
// In this example, the function is defined and immediately executed. The variable message 
// is scoped to the function and cannot be accessed outside of it.

// IIFEs are particularly useful when you want to create a new scope to encapsulate variables
// and avoid conflicts, especially in large projects or when integrating different scripts.
// They are also commonly used in JavaScript modules and libraries.
    

// 6. Recursion
// Recursion is when a function calls itself.

// Example:
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Explanation:
// The function keeps calling itself with smaller values until a base condition is met.

// 7. Arrow Functions and Lexical this
// Arrow functions don’t have their own this; they inherit this from their surrounding context.

Example:
const obj = {
    name: 'Yawar',
    greet: function () {
        const inner = () => {
            console.log(`Hello, ${this.name}`);
        };
        inner();
    },
};

obj.greet(); // Output: Hello, Yawar
// Explanation:
// Arrow functions make managing this easier in callbacks and event handlers.

// Parameters
// Parameters are the variables listed as a part of the function's definition. You can
// pass values into these parameters when calling the function.

javascript
function greet(name, timeOfDay) {
    console.log(`Good ${timeOfDay}, ${name}!`);
}

greet('Alice', 'morning'); // Output: Good morning, Alice!
greet('Bob', 'evening');   // Output: Good evening, Bob!
// Default Parameter Values
// Default parameter values provide a way to set default values for parameters in case no 
// argument is passed or if undefined is passed. This can prevent errors and allow developers
// to call functions with fewer arguments.

// Here's how you define default parameter values:

javascript
function greet(name, timeOfDay = 'day') {
    console.log(`Good ${timeOfDay}, ${name}!`);
}

greet('Alice');       // Output: Good day, Alice!
greet('Bob', 'night'); // Output: Good night, Bob!
In this example, if timeOfDay is not provided, it defaults to 'day'.

Combining Parameters
You can combine regular and default parameters to make your functions more versatile.

javascript
function makeGreeting(name, greeting = 'Hello', punctuation = '!') {
    console.log(`${greeting}, ${name}${punctuation}`);
}

makeGreeting('Alice');                  // Output: Hello, Alice!
makeGreeting('Bob', 'Good Evening');    // Output: Good Evening, Bob!
makeGreeting('Eve', 'Hi', '!!');        // Output: Hi, Eve!!

Spread and Rest Parameters
The spread operator (...) allows you to handle multiple parameters more flexibly. 
It can be used to pass an array of arguments to a function.

javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));    // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
In this example, using the rest parameter (...numbers), the function sum can accept any 
number of arguments and process them as an array.

These features help make JavaScript functions more powerful and versatile, enabling you 
to write cleaner and more maintainable code.
