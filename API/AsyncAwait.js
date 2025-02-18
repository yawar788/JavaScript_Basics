// The async/await syntax in JavaScript is a more readable and intuitive way to work with 
// asynchronous code compared to Promises. It's built on top of Promises and helps to write
// asynchronous code that looks synchronous.

// Theoretical Background
// async: The async keyword is used to declare an asynchronous function. When called, it 
// returns a Promise.

// await: The await keyword is used to pause the execution of an async function until a 
// Promise is resolved or rejected. It can only be used inside an async function.

// Example with Comments
// Here's an example using async/await to fetch data from an API:

// javascript
// // Function that simulates fetching data from an API
// async function fetchData() {
//   // Use try-catch to handle errors
//   try {
//     // Simulating a fetch operation with a Promise that resolves after 2 seconds
//     let response = await new Promise((resolve) => {
//       setTimeout(() => resolve({ data: 'Sample data from API' }), 2000);
//     });

//     console.log(response.data); // This will log 'Sample data from API'

//   } catch (error) {
//     console.log('Error:', error); // This will run if there's an error in the Promise
//   }
// }

// // Call the async function
// fetchData();
// Comments in the Code:

// async function fetchData() { ... }: Declares an asynchronous function named fetchData.

// try { ... } catch (error) { ... }: The try-catch block is used to handle any errors that
// might occur in the async function.

// let response = await new Promise((resolve) => { ... });: The await keyword pauses the
// execution of the fetchData function until the Promise is resolved. In this example, it
// simulates a network request that takes 2 seconds to complete.

// console.log(response.data);: Logs the data received from the simulated API call.

// console.log('Error:', error);: Logs any error that might occur in the Promise.
