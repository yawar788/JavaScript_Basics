// Advanced Functions 
// Understanding advanced topics in JavaScript functions is crucial as they form the
// backbone of the language. Here, we'll delve deep into the following advanced topics:

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

4. Function Composition
Function composition combines two or more functions to create a new function.

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

IIFE stands for Immediately Invoked Function Expression. It's a JavaScript function that runs as soon as it is defined. This is often used to create a local scope for variables, to avoid polluting the global scope.

The syntax for an IIFE looks like this:

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
In this example, the function is defined and immediately executed. The variable message is scoped to the function and cannot be accessed outside of it.

IIFEs are particularly useful when you want to create a new scope to encapsulate variables and avoid conflicts, especially in large projects or when integrating different scripts.
They are also commonly used in JavaScript modules and libraries.
    
// Example:
(function () {
    console.log('This is an IIFE!');
})();

// Explanation:
// Useful for creating isolated scopes to prevent variable pollution.


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

7. Arrow Functions and Lexical this
Arrow functions don’t have their own this; they inherit this from their surrounding context.

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
Explanation:
Arrow functions make managing this easier in callbacks and event handlers.
