// let score = "33"

// //const {score: bodyScore} = req.body; // Assuming req.body contains the score value
// console.log(typeof score); // "string"
// console.log(score); // "33"

// let valueInNumber = Number(score); // Convert string to number
// console.log(typeof valueInNumber); // "number"

// // If the conversion fails, valueInNumber will be NaN (Not a Number)
// // true =1, false = 0
// // You can check if the conversion was successful
// // console.log(isNaN(valueInNumber)); // false, since "33" is a valid number
// //console.log(valueInNumber); // 33

// let isLoggedIn = "Siddhesh"; // Boolean
// let booleanInLoggedIn = Boolean(isLoggedIn); // Convert number to boolean
// console.log(booleanInLoggedIn);
// // true, since non-empty strings are truthy in JavaScript
// // If the string is empty, it will be false

// let numberValue = 33;
// let stringValue = String(numberValue);
// console.log(stringValue);
// console.log(typeof stringValue);


// ****************Operation****************************

let value = 3;
let negValue = -value; // Negation
console.log(negValue); // -3

//console.log(2+3); // Addition
// console.log(2 - 3); // Subtraction
// console.log(2 * 3); // Multiplication
// console.log(2 / 3); // Division
// console.log(2 % 3); // Modulus (Remainder)
// console.log(2 ** 3); // Exponentiation (2 raised to the power of 3)
// console.log(2 + 3 * 4); // Addition and Multiplication (Multiplication has higher precedence)
// console.log((2 + 3) * 4); // Parentheses change precedence
let str1 = 1;
let str2 = "2";  
let str3 = str1 + str2; 
console.log(str3); 

console.log("1" + 2);
console.log(1 + "2");  

console.log("1" + 2 + 3); // "123" (string concatenation)
console.log(1 + "2" + 3); // "123" (string concatenation)

let gameCount = 10;
gameCount++; // Increment by 1
++gameCount; // Increment by 1 (alternative syntax)
console.log(gameCount); // 12