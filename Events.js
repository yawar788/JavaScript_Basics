// Event listeners in JavaScript are methods that allow you to handle the different events
// that occur in the browser, such as a user clicking a button, typing in a field, or any other user 
// interaction with the elements on a webpage.

// Adding Event Listeners
// You can add event listeners to any DOM element using the addEventListener method. The syntax is as follows:

// javascript
// element.addEventListener(event, function, useCapture);
// element: The DOM element that the event listener is being attached to.

// event: The type of event you're listening for, such as "click", "keypress", or "mouseover".

// function: The function to be executed when the event occurs.

// useCapture: An optional boolean value indicating whether the event should be captured or bubbled. The default is false.

// Example
// Here's a simple example to demonstrate how you can use an event listener to respond to a button click:

// html
// <!DOCTYPE html>
// <html>
// <body>

// <button id="myButton">Click me</button>
// <p id="output"></p>

// <script>
// document.getElementById('myButton').addEventListener('click', function() {
//   document.getElementById('output').textContent = 'Button was clicked!';
// });
// </script>

// </body>
// </html>
// In this example:

// We select the button element using getElementById and add an event listener for the "click" event.

// When the button is clicked, the anonymous function updates the content of the paragraph element with the id output.

// Another Example with Multiple Events
// You can also attach multiple event listeners to the same element or different events on the same element:

// html
// <!DOCTYPE html>
// <html>
// <body>

// <button id="myButton">Click me</button>
// <p id="hoverParagraph">Hover over me</p>
// <p id="output"></p>

// <script>
// var button = document.getElementById('myButton');
// var hoverParagraph = document.getElementById('hoverParagraph');

// button.addEventListener('click', function() {
//   document.getElementById('output').textContent = 'Button was clicked!';
// });

// hoverParagraph.addEventListener('mouseover', function() {
//   document.getElementById('output').textContent = 'You hovered over the paragraph!';
// });
// </script>

// </body>
// </html>
// In this example:

// We attach a "click" event listener to the button element.

// We attach a "mouseover" event listener to the paragraph element with the id hoverParagraph.

// Remove Event Listeners
// You can also remove an event listener using the removeEventListener method. This method
// requires that the event listener is defined as a named function:

// html
// <!DOCTYPE html>
// <html>
// <body>

// <button id="myButton">Click me</button>
// <button id="removeButton">Remove Click</button>
// <p id="output"></p>

// <script>
// function displayMessage() {
//   document.getElementById('output').textContent = 'Button was clicked!';
// }

// var clickButton = document.getElementById('myButton');
// clickButton.addEventListener('click', displayMessage);

// document.getElementById('removeButton').addEventListener('click', function() {
//   clickButton.removeEventListener('click', displayMessage);
//   document.getElementById('output').textContent = 'Click event removed!';
// });
// </script>

// </body>
// </html>
// In this example:

// We define displayMessage as a named function.

// We attach the displayMessage function as an event listener to the button with the id myButton.

// When the "Remove Click" button is clicked, we remove the event listener from the first button.

// Event listeners are essential for making your web pages interactive and responsive to user actions. 
// By attaching event listeners to DOM elements, you can create a more engaging user experience. If you 
// have specific scenarios or types of events you'd like to explore further, just let me know!

// use event listener in examples as well
// Got it! Here are the previous examples, but this time we'll include event listeners to demonstrate their usage.


// Remove Event Listeners
// You can also remove an event listener using the removeEventListener method. This method requires
// that the event listener is defined as a named function:

// html
// <!DOCTYPE html>
// <html>
// <body>

// <button id="myButton">Click me</button>
// <button id="removeButton">Remove Click</button>
// <p id="output"></p>

// <script>
// function displayMessage() {
//   document.getElementById('output').textContent = 'Button was clicked!';
// }

// var clickButton = document.getElementById('myButton');
// clickButton.addEventListener('click', displayMessage);

// document.getElementById('removeButton').addEventListener('click', function() {
//   clickButton.removeEventListener('click', displayMessage);
//   document.getElementById('output').textContent = 'Click event removed!';
// });
// </script>

// </body>
// </html>
// In this example:

// We define displayMessage as a named function.

// We attach the displayMessage function as an event listener to the button with the id myButton.

// When the "Remove Click" button is clicked, we remove the event listener from the first button.

// Event listeners are essential for making your web pages interactive and responsive to user actions. 
// By attaching event listeners to DOM elements, you can create a more engaging user experience.
// If you have specific scenarios or types of events you'd like to explore further, just let me know!



// Event Handling
// You can attach event handlers to DOM elements to make interactive content:

// html
// <!DOCTYPE html>
// <html>
// <body>

// <button id="myButton">Click me</button>

// <p id="output"></p>

// <script>
// // Get the button element
// var button = document.getElementById('myButton');

// // Add event listener
// button.addEventListener('click', function() {
//   var output = document.getElementById('output');
//   output.textContent = 'Button was clicked!';
// });
// </script>

// </body>
// </html>
// The above examples demonstrate how the DOM can be used to manipulate and interact with
// the document's content dynamically. As you explore further, you'll find many other methods
// and properties available to make your web pages more dynamic and responsive
