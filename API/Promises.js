// Theoretical Background
// A Promise in JavaScript is an object representing the eventual completion (or failure) 
// of an asynchronous operation and its resulting value. Promises provide a cleaner, more 
// flexible way to handle asynchronous operations compared to traditional callbacks.

// Key Points:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// .then: Used to handle a fulfilled promise.
// .catch: Used to handle a rejected promise.

// Example with Comments
// Here's a simple example using Promises with .then and .catch:

// // Creating a new Promise
// let myPromise = new Promise((resolve, reject) => {
//   let success = true; // Simulate success or failure

//   if (success) {
//     resolve("The operation was successful!"); // Resolving the promise
//   } else {
//     reject("There was an error in the operation."); // Rejecting the promise
//   }
// });

// // Handling the resolved promise with .then
// myPromise.then((message) => {
//   console.log(message); // This will run if the promise is resolved successfully
// }).catch((error) => {
//   console.log(error); // This will run if the promise is rejected
// });

// Comments in the Code:

// new Promise((resolve, reject) => {...}): Creates a new Promise object. The function passed
// to the Promise constructor is called immediately, receiving two functions, resolve and reject, as parameters.

// let success = true: Simulate whether the operation is successful or not. You can change this to false to 
// see how the catch block works.

// resolve("The operation was successful!"): Calls the resolve function with a success message, 
// indicating the operation completed successfully.

// reject("There was an error in the operation."): Calls the reject function with an error message, 
// indicating the operation failed.

// .then((message) => {...}): This method is called when the promise is resolved successfully. 
// It takes a function that receives the resolved value.

// .catch((error) => {...}): This method is called when the promise is rejected. 
// It takes a function that receives the error.


// Promise Chaining
// Promises can also be chained to handle multiple asynchronous operations in a sequence:

// myPromise
//   .then((message) => {
//     console.log(message);
//     return "Next step."; // Return a value to pass to the next then
//   })
//   .then((nextMessage) => {
//     console.log(nextMessage); // This will log "Next step."
//   })
//   .catch((error) => {
//     console.log(error); // This will catch any errors in the chain
//   });

// Comments in the Code:

// return "Next step.": The return value of one .then is passed to the next .then as an argument.
// .then((nextMessage) => {...}): This .then will receive the value returned from the previous .then.
// .catch((error) => {...}): This .catch will handle any errors that occur in the promise chain.
