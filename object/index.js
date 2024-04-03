// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.

// 1. JS Primitive

// Primitive Value: A value that has
// a. no properties or methods
// b. immutable (Hardcoded and cannot be changed)

// JS Object: Collection of named values
// Common practice: Declare object with const keyword

// Object: Properties & Methods
// Properties: named values
// Methods: Action performed on objects

// There are different ways to create Object in JS
// 1. Using object literal
// object literal: List of name : value pairs inside curly braces
// This method of creating object is preferred because of its readability, simplicity and execution speed
// const car = {
//     brand:"Hyundai",
//     model: "Elantra",
//     price: "PKR 65 Lacs"
// }


// or


const car = {}
car.brandName = 'Hyundai'
car.modelName = 'Elantra'
console.log(car)


// 2. Using JS new keyword
const userData = new Object()
userData.fullname = "Bilal"
userData.age = 23

// Object Properties
