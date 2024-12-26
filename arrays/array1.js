// arrays 
// In JavaScript arrays
// a built-in object that provides 
// a way to store a collection of data
// It is an ordered list of values, 

// which can be of any data type,
// including numbers, strings, objects, or even other arrays.

// 1. Array Literal Syntax
const fruits=['banana','apple','orange'];


// 2. Array Constructor
// const fruits = new Array('apple', 'banana', 'cherry');

// Accessing Array Elements
// console.log(fruits[0]);
// console.log(fruits[1]);

// Modifying Arrays
// You can modify arrays in several ways:

// 1. Adding Elements
// Using push(): Adds one or more elements to the end of the array.
// fruits.push('pomegranate');
// fruits.push('pomegranate','melon');
// console.log(fruits);

// Using unshift(): Adds one or more elements to the beginning of the array.
// fruits.unshift('grapes')
// console.log(fruits);

// 2. Removing Elements
// Using pop(): Removes the last element from the array and returns it.
// const Lastfruit=fruits.pop();
// console.log(Lastfruit);

// Important Array Properties
// length: Returns the number of elements in the array. This is dynamic and 
// adjusts automatically when elements are added or removed.
// const animals = ['cat', 'dog', 'elephant'];
// console.log(animals.length); // Output: 3

// concat(): Merges two or more arrays and returns a new array.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = arr1.concat(arr2); // [1, 2, 3, 4, 5, 6]

// join(): Converts all elements of an array into a string, separated by a specified separator.
// const names = ['Alice', 'Bob', 'Charlie'];
// console.log(names.join('-')); // Output: Alice-Bob-Charlie



// Using shift(): Removes the first element from the array and returns it.
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// 3. Updating Elements
// You can directly assign a new value to a specific index:
// fruits[1]='blueberry'
// console.log(fruits);

// Iterating Over Arrays
// You can iterate over arrays using different methods:
// For Loop:
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
    
// }

// ForEach Method:
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// For...of Loop:
// for(const fruit of fruits){
//     console.log(fruit);
// }

// Common Array Methods
// slice(start, end): Returns a shallow copy of a portion of an array.
// console.log(fruits.slice(0,2));

// splice(start, deleteCount, item1, item2, ...): Changes the contents
//  of an array by removing or replacing existing elements.
fruits.splice(1, 1, 'kiwi'); // Removes 1 element at index 1 and adds 'kiwi'
console.log(fruits); // Output: ['apple', 'kiwi', 'cherry']






