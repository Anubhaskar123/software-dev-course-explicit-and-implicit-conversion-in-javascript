/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//TASK1

// Convert string "5" to a number before performing subtraction
let result = Number("5") - 2;

// Convert the result to a string so it concatenates correctly in the message
console.log("The result is: " + String(result));

// Convert the string "false" to an actual boolean value by comparing it
let isValid = Boolean("false" === "true"); 
// "false" === "true" evaluates to false, and Boolean(false) keeps it false

if (isValid) {
    console.log("This is valid!");
}

// Convert the age string to a number before doing arithmetic
let age = Number("25");

// Now addition will be numeric instead of string concatenation
let totalAge = age + 5;

// Convert the number back to string for display in the message
console.log("Total Age: " + String(totalAge));


//TASK2

// ---------- Implicit Type Conversion Example ----------

// A string and a number are added together
let implicitValue = "10" + 5;

// Before conversion
console.log("Original values:");
console.log("Type of '10':", typeof "10");
console.log("Type of 5:", typeof 5);

// After implicit conversion
console.log("Result after implicit conversion:", implicitValue);
console.log("Type after conversion:", typeof implicitValue);


// ---------- Explicit Type Conversion Example (Edge Case) ----------

// Using an edge case: undefined
let edgeValue = undefined;

// Before conversion
console.log("\nBefore explicit conversion:");
console.log("Value:", edgeValue);
console.log("Type:", typeof edgeValue);

// Explicit conversion using Number()
let convertedValue = Number(edgeValue);

// After conversion
console.log("After explicit conversion:", convertedValue);
console.log("Type after conversion:", typeof convertedValue);