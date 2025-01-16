// APIs (Application Programming Interfaces)
// An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to 
// communicate with each other. Think of it as a bridge that enables software programs to interact and exchange information seamlessly.

// Endpoint: The URL where your API can be accessed by a client.

// Request: The act of asking the API to perform an action or give data, typically involving methods like GET, POST, PUT, DELETE.

// Response: The data your API sends back after processing the request.

// JSON/XML: Common data formats used to structure the data being sent and received.

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
