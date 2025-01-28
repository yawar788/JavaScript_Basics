// Callbacks
// Callbacks are a way to handle asynchronous operations in JavaScript. A callback is a
// function passed as an argument to another function, which can then be executed once a
// certain task is completed. This is a common way to handle asynchronous operations, like 
// making a network request or reading a file.

// Here’s a simple example:

// javascript
// Function to simulate an asynchronous operation
function fetchData(url, callback) {
  setTimeout(() => {
    // Simulating data retrieval
    const data = { name: 'Example', value: 42 };
    // Execute the callback function with the data
    callback(data);
  }, 2000); // Simulate a 2-second delay
}

// Callback function to handle the data
function handleData(data) {
  console.log('Data received:', data);
}

// Call the fetchData function with a URL and the callback function
fetchData('https://api.example.com/data', handleData);
In this example:

// fetchData(url, callback): This function takes a URL and a callback function as arguments.

// setTimeout(() => { ... }, 2000): Simulates an asynchronous operation with a 2-second delay.

// callback(data): Once the simulated data retrieval is complete, the callback function is executed
// with the retrieved data as its argument.

handleData(data): This is the callback function that processes the data.

Callbacks are powerful but can lead to "callback hell" if not managed properly, especially when
dealing with multiple asynchronous operations. This is where Promises and async/await come in 
handy, as they help to make asynchronous code more readable and manageable.
