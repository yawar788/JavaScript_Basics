// In JavaScript, you can use setAttribute and getAttribute to work with an element's attributes. 
// Here's a brief overview of how you can use these methods:

// setAttribute
// The setAttribute method is used to add a new attribute or modify the value of an existing attribute
// on an element.

// Syntax:
// javascript
// element.setAttribute(attributeName, value);

// setAttribute Example
// Let's say we have an HTML element like this:

// html
// <div id="myElement"></div>

// We want to give this div a class of highlight and a custom attribute data-info with the value testValue.
// Here's how you can do it with setAttribute:

// javascript
// // Select the element
// let element = document.getElementById("myElement");

// // Set the class attribute
// element.setAttribute("class", "highlight");

// // Set a custom attribute
// element.setAttribute("data-info", "testValue");

// After running this code, the HTML will look like this:

// html
// <div id="myElement" class="highlight" data-info="testValue"></div>

// getAttribute Example
// Continuing from the previous example, we want to retrieve the values of the class and data-info attributes.

// javascript
// // Select the element
// let element = document.getElementById("myElement");

// // Get the value of the class attribute
// let classValue = element.getAttribute("class");

// // Get the value of the custom data attribute
// let dataInfoValue = element.getAttribute("data-info");

// console.log(classValue); // Output: highlight
// console.log(dataInfoValue); // Output: testValue

// Putting it All Together
// Here's a complete example that sets and then gets the attribute values:

// html
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Attribute Example</title>
// </head>
// <body>
//     <div id="myElement"></div>

//     <script>
//         // Select the element
//         let element = document.getElementById("myElement");

//         // Set attributes
//         element.setAttribute("class", "highlight");
//         element.setAttribute("data-info", "testValue");

//         // Get attributes
//         let classValue = element.getAttribute("class");
//         let dataInfoValue = element.getAttribute("data-info");

//         console.log("Class attribute value:", classValue); // Output: highlight
//         console.log("Data-info attribute value:", dataInfoValue); // Output: testValue
//     </script>
// </body>
// </html>
