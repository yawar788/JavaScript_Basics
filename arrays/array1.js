// arrays 
// In JavaScript, an array is a built-in object that provides 
// a way to store a collection of data
// It is an ordered list of values, which can be of any data type,
//  including numbers, strings, objects, or even other arrays.

// 1. Array Literal Syntax
const fruits=['banana','apple','orange'];

// 2. Array Constructor
// const fruits = new Array('apple', 'banana', 'cherry');

// Accessing Array Elements
console.log(fruits[0]);
console.log(fruits[1]);

// Modifying Arrays
// You can modify arrays in several ways:

// 1. Adding Elements
// Using push(): Adds one or more elements to the end of the array.
fruits.push('pomegranate');
fruits.push('pomegranate','melon');
console.log(fruits);

// Using unshift(): Adds one or more elements to the beginning of the array.
fruits.unshift('grapes')
console.log(fruits);

// 2. Removing Elements
// Using pop(): Removes the last element from the array and returns it.
const Lastfruit=fruits.pop();
console.log(Lastfruit);





