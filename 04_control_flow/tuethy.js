const userEmail = "siddhesh@gmail.com"
if (userEmail) {
    console.log("Email is valid");
}
else {
    console.log("Email is not valid");
}

// falsy values in JavaScript
// 0, -0, "", null, undefined, NaN, false, BigInt(0)
const userAge = 0;
if (userAge) {
    console.log("Age is valid");
}
else {
    console.log("Age is not valid");
}


// truthy values in JavaScript
// "0", " ", [], {}, true, 1, -1, Infinity
const userName = "Siddhesh";
if (userName) {
    console.log("Name is valid");
}
else {
    console.log("Name is not valid");
}

// Nullish Coalescing Operator (??)
let value = null;
let defaultValue = "Default Value";
let result = value ?? defaultValue;
console.log(result); // Output: "Default Value"
