const name = "siddhesh";
const repoCount = 10;

// console.log("My name is " + name + " and my repo count is " + repoCount); // Concatenation it is not recommended for readability

console.log(`My name is ${name} and my repo count is ${repoCount}`); // Template literals (ES6 feature)

const gameName = new String('siddhesh');

console.log(gameName[0]); // Accessing the first character of the string object
console.log(gameName.length); // Getting the length of the string object
console.log(gameName.toUpperCase()); // Converting the string object to uppercase

console.log(gameName.charAt(5)); // Getting the character at index 5 of the string object
console.log(gameName.indexOf('s')); // Finding the index of the first occurrence of 's' in the string object

const newString = gameName.substring(0, 5); // Extracting a substring from the string object
console.log(newString); // Output: "siddh"

const anotherString = gameName.slice(0, 5); // Extracting a slice from the string object
console.log(anotherString); // Output: "siddh"

const newString2 = "  siddhesh  ".trim(); // Removing whitespace from both ends of the string
console.log(newString2); // Output: "siddhesh"

const url = "https://www.example%20.com";
console.log(decodeURIComponent(url)); // Decoding a URL-encoded string
console.log(encodeURIComponent("https://www.example.com/some path with spaces")); // Encoding a string for use in a URL
console.log(url.replace("%20", " ")); // Replacing '%20' with a space in the URL string

console.log(gameName.split("")); // Splitting the string into an array of characters