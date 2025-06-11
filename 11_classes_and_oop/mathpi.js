const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);
// Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

// Trying to change Math.PI
// Math.PI = 5;
// console.log(Math.PI); // Still 3.141592653589793, because it's non-writable

const chai = {
    name: 'Ginger chai',
    price: 250,
    isAvailable: true
};

// You must specify a property name, like "name"
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Output: { value: 'Ginger chai', writable: true, enumerable: true, configurable: true }

for (let [key, value] of Object.entries(chai)){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}
