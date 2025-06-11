const score = 100;

const balance = new Number(100.5);
const balance2 = 100.5;
console.log(balance); // Output: [Number: 100.5]

console.log(balance2.toFixed(2)); // Output: "100.50" (converts number to string with 2 decimal places)
console.log(balance.toFixed(2)); // Output: "100.50" (converts number object to string with 2 decimal places)
console.log(balance.toPrecision(3)); // Output: "100" (converts number object to string with 3 significant digits)
console.log(balance.toExponential(2)); // Output: "1.01e+2" (converts number object to string in exponential notation with 2 decimal places)
console.log(balance.toString()); // Output: "100.5" (converts number object to string)
console.log(balance.valueOf()); // Output: 100.5 (returns the primitive value of the number object)

const hundred = 10000000000; // Big number
console.log(hundred.toLocaleString()); // Output: "10,000,000,000" (formats the number with commas for thousands)
console.log(Number.isInteger(hundred)); // Output: true (checks if the number is an integer)
console.log(Number.isNaN(NaN)); // Output: true (checks if the value is NaN)
console.log(Number.isFinite(100)); // Output: true (checks if the value is a finite number)
console.log(Number.isSafeInteger(100)); // Output: true (checks if the value is a safe integer)
console.log(Number.parseFloat("100.5")); // Output: 100.5 (parses a string and returns a floating-point number)
console.log(Number.parseInt("100.5")); // Output: 100 (parses a string and returns an integer)
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308 (maximum representable number in JavaScript)
console.log(Number.MIN_VALUE); // Output: 5e-324 (minimum representable number in JavaScript)



// Math object
console.log(Math.PI); // Output: 3.141592653589793 (value of π)
console.log(Math.E); // Output: 2.718281828459045 (value of e)
console.log(Math.abs(-10)); // Output: 10 (absolute value)
console.log(Math.ceil(4.2)); // Output: 5 (rounds up to the nearest integer)
console.log(Math.floor(4.8)); // Output: 4 (rounds down to the nearest integer)
console.log(Math.round(4.5)); // Output: 5 (rounds to the nearest integer)
console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5 (maximum value)
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1 (minimum value)
console.log(Math.random()); // Output: a random number between 0 and 1
console.log((Math.random() * 100) + 1); // Output: a random number between 1 and 100
console.log(Math.sqrt(16)); // Output: 4 (square root)
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
console.log(Math.log(10)); // Output: 2.302585092994046 (natural logarithm of 10)
console.log(Math.log10(100)); // Output: 2 (base-10 logarithm of 100)
console.log(Math.log2(8)); // Output: 3 (base-2 logarithm of 8)
console.log(Math.sin(Math.PI / 2)); // Output: 1 (sine of π/2)
console.log(Math.cos(0)); // Output: 1 (cosine of 0)
console.log(Math.tan(Math.PI / 4)); // Output: 1 (tangent of π/4)
console.log(Math.asin(1)); // Output: 1.5707963267948966 (inverse sine of 1)
console.log(Math.acos(1)); // Output: 0 (inverse cosine of 1)
console.log(Math.atan(1)); // Output: 0.7853981633974483 (inverse tangent of 1)

const min =10;
const max = 100;

Math.random() * (max - min) + min; // Generates a random number between min and max
console.log(Math.random() * (max - min) + min); // Output: a random number between 10 and 100