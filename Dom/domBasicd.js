// What is DOM ? 

// The Document Object Model (DOM) in JavaScript is a programming interface for web documents. 
// It represents the structure of a document as a tree of objects that can be manipulated via 
// JavaScript. Each element in the HTML becomes an object that can be accessed and modified to
// dynamically change the document's structure, style, and content.

// Accessing DOM Elements
// You can access DOM elements using methods like getElementById(), getElementsByClassName(), 
// and querySelector():

// html
// <!DOCTYPE html>
// <html>
// <body>

// <h1 id="myHeading">Hello World</h1>
// <p class="myClass">This is a paragraph.</p>

// <script>
// // Accessing by ID
// var heading = document.getElementById('myHeading');
// console.log(heading.textContent); // Output: Hello World
// console.log(heading.innerHTML); // Output: Hello World
// console.log(heading.innerText); // Output: Hello World

// // Accessing by Class
// var paragraphs = document.getElementsByClassName('myClass');
// console.log(paragraphs[0].textContent); // Output: This is a paragraph.

// // Accessing by query
// var firstParagraph = document.querySelector('.myClass');
// console.log(firstParagraph.textContent); // Output: This is a paragraph.
// </script>

// </body>
// </html>


// Modifying DOM Elements
// You can modify DOM elements by changing their properties, like textContent, innerHTML, or style:

// html
// <!DOCTYPE html>
// <html>
// <body>

// <h1 id="myHeading">Hello World</h1>
// <p id="myParagraph">This is a paragraph.</p>

// <script>
// // Change text content
// var heading = document.getElementById('myHeading');
// heading.textContent = 'New Heading'; // Heading changes to "New Heading"

// // Change inner HTML
// var paragraph = document.getElementById('myParagraph');
// paragraph.innerHTML = 'This is the <b>new</b> paragraph.'; // Paragraph changes

// // Change style
// paragraph.style.color = 'blue'; // Paragraph text color changes to blue
// </script>

// </body>
// </html>


// Adding and Removing Elements
// You can dynamically add or remove elements using methods like appendChild(), removeChild(),
// and createElement():

// html
// <!DOCTYPE html>
// <html>
// <body>

// <ul id="list">
//   <li>Item 1</li>
//   <li>Item 2</li>
// </ul>

// <script>
// // Create new list item
// var newItem = document.createElement('li');
// newItem.textContent = 'Item 3';

// // Add it to the list
// var list = document.getElementById('list');
// list.appendChild(newItem); // Adds "Item 3" to the list

// // Remove an item
// var secondItem = list.getElementsByTagName('li')[1];
// list.removeChild(secondItem);  // Removes "Item 2" from the list
// </script>

// </body>
// </html>
