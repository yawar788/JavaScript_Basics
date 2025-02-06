// APIs (Application Programming Interfaces)
// An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to 
// communicate with each other. Think of it as a bridge that enables software programs to interact and exchange information seamlessly.

// Endpoint: The URL where your API can be accessed by a client.

// Request: The act of asking the API to perform an action or give data, typically involving methods like GET, POST, PUT, DELETE.

// Response: The data your API sends back after processing the request.

// JSON/XML: Common data formats used to structure the data being sent and received.

// AJAX (Asynchronous JavaScript and XML)
// AJAX allows you to send and receive data asynchronously without refreshing the web page.

// You can use the XMLHttpRequest object or the modern fetch API to make AJAX requests.

// 2. Fetch API
// The fetch API is a modern and simpler way to make HTTP requests.

// It returns a promise that resolves to the Response object representing the response to the request.

// 3. JSON (JavaScript Object Notation)
// JSON is a lightweight data interchange format that's easy for humans to read and write and easy for machines 
// to parse and generate.

const data = {
  name: "John Doe",
  age: 30
};

const jsonString = JSON.stringify(data); // Convert JavaScript object to JSON string
const jsObject = JSON.parse(jsonString); // Convert JSON string to JavaScript object


// It's commonly used to exchange data between a server and a web application.

// Authentication: Different ways to verify the client/app making the request (e.g., API key, OAuth).

// Getting Started
// Here's a basic rundown of how to make requests using an API:

// Choose your API: Understand its documentation; maybe try APIs like the public ones from Twitter, Google Maps, or weather services.

// Get an API Key: Sign up if necessary and get an API key, which acts like a password to access the API.

// Pick your tools:

// cURL: A command line tool to make requests.

// Postman: A popular client for testing API requests.

// Programming Languages: Like Python (using requests library), JavaScript (using fetch or Axios), etc.


// Basics: Fetching Data using fetch
// Concept: fetch is a native JavaScript function for making XMLHttpRequests (XHR) that returns a Promise.

// Example: Fetching data from a public API.

// javascript
// const url = 'https://api.example.com/data'
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));


// Interacting with API Endpoints
// GET Request
// Example: Fetching user data from a placeholder API.

// javascript
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data));

// POST Request
// Concept: Sending data to an API, for example, creating a new user.
// Example:

// javascript
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data));
// Intermediate: Handling Authentication
// API Key Authentication
// Example: Adding an API key to the header.

// javascript
// fetch('https://api.example.com/data', {
//     headers: {
//         'Authorization': 'Bearer YOUR_API_KEY'
//     }
// })
//     .then(response => response.json())
//     .then(data => console.log(data));
// Advanced: Error Handling and Async/Await
// Error Handling
// Example: Improved error handling in fetch requests.

// javascript
// fetch('https://api.example.com/data')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('There was a problem with your fetch operation:', error));
// Async/Await
// Concept: Using async and await to handle asynchronous operations more cleanly.

// Example: Fetching data with async/await.

// javascript
// async function fetchData() {
//     try {
//         const response = await fetch('https://api.example.com/data');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There was a problem with your fetch operation:', error);
//     }
// }

// fetchData();
// Advanced: Using Libraries like Axios
// Concept: Using Axios, a promise-based HTTP client for easier API requests.

// Example: Basic GET request with Axios.

// javascript
// import axios from 'axios';

// axios.get('https://api.example.com/data')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('There was an error!', error);
//     });
// Example: POST request with Axios.

// javascript
// axios.post('https://api.example.com/posts', {
//     title: 'foo',
//     body: 'bar',
//     userId: 1
// })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('There was an error!', error);
//     });
// Asynchronous Operations with Multiple Requests
// Example: Making multiple requests with Promise.all.

// javascript
// async function fetchMultipleData() {
//     const [users, posts] = await Promise.all([
//         fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
//         fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
//     ]);
//     console.log(users);
//     console.log(posts);
// }

// fetchMultipleData();


// Cat Facts API
// Goal: Fetch random interesting facts about cats.

// Example:
// javascript
// fetch('https://catfact.ninja/fact')
//     .then(response => response.json())
//     .then(data => {
//         console.log(`Cat Fact: ${data.fact}`);
//     })
//     .catch(error => console.error('Error:',error))
