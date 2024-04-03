// 1. DOM INTRO
// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// HTML DOM - Tree of objects

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// DOM - defines a standard for accessing documents
// HTML DOM - The HTML DOM is a standard for how to get, change, add, or delete HTML elements (objects).


// 2. DOM METHODS
// HTML DOM Method - Action perform on HTML element
// HTML DOM Properties - Values of HTML element that can set or change

// 2.1 DOM Programming Ibterface
// In the DOM, all HTML elements are defined as objects.
// The programming interface is the properties and methods of each object

// document.getElementById --- Method
// innerHTML -- Property (Used to read, set, replace and append content to HTML elements)

// Example 01: Read HTML content
// let readContent = document.getElementById("content").innerHTML
// console.log(readContent)

// Example 02: Set HTML Content
// document.getElementById("header").innerHTML = "HTML DOM"

// Example 03: Replace HTML Content
// document.getElementById("replace").innerHTML = "Document Object Model"

// Example 04: Append content to HTML Element
// document.getElementById("append").innerHTML += "This is a dummy paragraph created using lorem ipsum"

// 3. DOM Document
// 3.1 Find HTML element
// Below are three ways to access HTML elements:-
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()


// Find Element By ID:
// Two possibilities:
// 1. If found, object will return
// 2. If not found, null will return

// element exist -- object
// let getObject = document.getElementById("header")
// console.log(getObject)

// element not exist
// let readObject = document.getElementById("data")
// console.log(readObject)


// Find element by tag name
// If found, return HTMLCollection of elements, else return HTML Collection
// let readParagraphTag = document.getElementsByTagName("p")
// console.log(readParagraphTag)


// let readURLTag = document.getElementsByTagName("a")
// console.log(readURLTag)


// Find element by class name
// If found, return HTMLCollection of elements, else return HTML Collection
let readDivClass = document.getElementsByClassName("container")
console.log(readDivClass)



// 3. DOM HTML
// 3.1 Change HTML content - already done in previous example
// 3.2 Change the value of attribute

// document.getElementById("set-img").src = "./media/food.jpg"

// 3.3 Create dynamic HTML Content
// const todayDate = Date()
// document.getElementById("new-date").innerHTML = todayDate

// 3.4 document.write()
// Write directly to the HTML output stream
// document.write("Hello, I am learning HTML DOM")


// 4. DOM Forms
// HTML form validation can be done by JavaScript.
// function validateDate(){
//     let getData = document.forms["userdata"]["name"].value
//     if (getData === ""){
//         alert("Name must be filled out")
//         return false
//     }
// }

